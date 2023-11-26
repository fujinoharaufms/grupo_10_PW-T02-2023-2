import {db} from '../fireBaseConnection';
import { collection, addDoc } from 'firebase/firestore';

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut,
  } from "firebase/auth";
  
  import { useState, useEffect } from "react";
  
  export const useAuthentication = () => {

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);
  
    // deal with memory leak
    const [cancelled, setCancelled] = useState(false);
  
    const auth = getAuth();
    const [user, setUser] = useState(() => auth.currentUser);

      // Monitora mudanças no estado de autenticação
    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        if (user) {
          setUser(user);
        } else {
          setUser(null);
        }
      });

      return () => unsubscribe();
    }, [auth]);


    function checkIfIsCancelled() {
      if (cancelled) {
        return;
      }
    }
  
    const createUser = async (data) => {
      checkIfIsCancelled();
    
      setLoading(true);
      setError(null);
    
      try {
        const { user } = await createUserWithEmailAndPassword(
          auth,
          data.email,
          data.senha
        );
    
        await updateProfile(user, {
          displayName: data.nome,
        });
    
        // Adiciona o usuário na coleção 'usuarios'
        const userProfile = {
          nome: data.nome,
          email: data.email,
          userId: user.uid,
        };
    
        try {
          await addDoc(collection(db, "usuarios"), userProfile);
        } catch (innerError) {
          console.error("Erro ao adicionar usuário no Firestore:", innerError);
          // Você pode optar por lançar um erro aqui ou lidar com ele de outra maneira
        }
    
        setLoading(false);
        return user;
      } catch (error) {
        console.log(error.message);
    
        let systemErrorMessage;
        if (error.message.includes("Password")) {
          systemErrorMessage = "A senha precisa conter pelo menos 6 caracteres.";
        } else if (error.message.includes("email-already")) {
          systemErrorMessage = "E-mail já cadastrado.";
        } else {
          systemErrorMessage = "Ocorreu um erro, por favor tenta mais tarde.";
        }
    
        setError(systemErrorMessage);
        setLoading(false);
      }
    };
  
    const logout = () => {
      checkIfIsCancelled();
  
      signOut(auth);
    };
  
    const login = async (data) => {
      checkIfIsCancelled();
  
      setLoading(true);
      setError(false);
  
      try {
        await signInWithEmailAndPassword(auth, data.email, data.senha);
      } catch (error) {
        console.log(error.message);
        console.log(typeof error.message);
        console.log(error.message.includes("user-not"));
  
        let systemErrorMessage;
  
        if (error.message.includes("user-not-found")) {
          systemErrorMessage = "Usuário não encontrado.";
        } else if (error.message.includes("wrong-password")) {
          systemErrorMessage = "Senha incorreta.";
        } else {
          systemErrorMessage = "Ocorreu um erro, por favor tenta mais tarde.";
        }
  
        console.log(systemErrorMessage);
  
        setError(systemErrorMessage);
      }
  
      console.log(error);
  
      setLoading(false);
    };
  
    useEffect(() => {
      return () => setCancelled(true);
    }, []);
  
    return {
      auth,
      user,
      createUser,
      error,
      logout,
      login,
      loading,
    };
  };