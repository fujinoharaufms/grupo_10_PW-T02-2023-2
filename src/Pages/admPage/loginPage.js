import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../fireBaseConnection';
import { toast, ToastContainer } from 'react-toastify';

const VerificarAdmin = () => {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);
  const location = useLocation();
  const { email, senha } = location.state || {};

  useEffect(() => {
    const verificarAdmin = async () => {
      const querySnapshot = await getDocs(query(collection(db, "administradores"), where("email", "==", email), where("senha", "==", senha)));
      if (!querySnapshot.empty) {
        setIsAdmin(true);
        navigate('/painel-administrador', { state: { email, senha } });
      } else {
        toast("Administrador não encontrado!");
        navigate('/');
      }
    };

    if (email && senha) {
      verificarAdmin();
    }
  }, [email, senha, navigate]);

  return (
    <div>
      <ToastContainer />
      {isAdmin ? <p>Administrador verificado: Encaminhando Painel Adm...</p> : <p>Administrador não verificado</p>}
    </div>
  );
};

export default VerificarAdmin;
