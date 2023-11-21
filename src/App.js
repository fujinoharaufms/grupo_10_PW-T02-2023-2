
import './App.css';

import { BrowserRouter, Routes, Route, Navagite} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css'; //Notificação
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Register from './Register/Register';

import { onAuthStateChanged } from "firebase/auth";

// importando funcionalidades dos hooks
import { useState, useEffect } from "react";
import { useAuthentication } from "./hooks/useAuthentication";

//Parte do contexto
import { AuthProvider } from "./contextos/AuthContext";

function App() {

    //Parte de consultar se o usuário está logado
    const [user, setUser] = useState(undefined);
    const { auth } = useAuthentication();

    const loadingUser = user === undefined;

    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        setUser(user);
      });
    }, [auth]);

    if (loadingUser) {
      return <p>Loading User</p>;
    }

    /*Passando o user para todas as rotas value={{user}}*/
  return (
    <AuthProvider value={{user}}> 
        <BrowserRouter>
     <div>Rotas possíveis: 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
         
          <Route path="/Register" element={<Register />} />
        </Routes>
     </div>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
