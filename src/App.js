import './App.css';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css'; // Notificação
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Register from './Register/Register';

import { onAuthStateChanged } from 'firebase/auth';

// importando funcionalidades dos hooks
import { useState, useEffect } from 'react';
import { useAuthentication } from './hooks/useAuthentication';

// Parte do contexto
import { AuthProvider } from './contextos/AuthContext';
import Navbar from './componentes/NavBar';
import Login from './Login/Login';
import QuestionPage from './Pages/Quiz/QustionPage'; // Corrigido o nome do componente
import CriarQuizz from './Pages/Quiz/CriarQuizz';
import Quiz from './Pages/Quiz/quizResponder';
import VerificarAdmin from './Pages/admPage/loginPage';
import LoginAdm from './Pages/admPage/formularioLogin';
import AdmPainel from './Pages/admPage/AdmDashboard';
import PainelUser from './Pages/Usuario/usuarioPainel';
import QuizzesList from './Pages/admPage/AdmListarQuiz';
import View from './Pages/admPage/visualizarQuiz';



function App() {
  // Parte de consultar se o usuário está logado
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
    <AuthProvider value={{ user }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Login" element={!user ? <Login /> : <Navigate to="/" />} />
          <Route path="/Register" element={!user ? <Register /> : <Navigate to="/" />} />
          <Route path="/CriarQuiz" element={ user ? (<CriarQuizz userId={user.uid} /> ) : (<Navigate to="/" /> ) }/>
          <Route path="/questions/:formId" element={<QuestionPage />} />
          <Route path="/LoginAdm" element={<LoginAdm />} />
          <Route path="/verificar-admin" element={<VerificarAdmin />} /> 
          <Route path='/listar-quizzes-adm' element={<QuizzesList/>} />
          <Route path="/quiz-view/:quizId" element={<View />} />
          <Route path="/painel-usuario" element={<PainelUser />} />
           {/* Adicione a rota para o componente Quiz */}
           <Route path="/quiz/:quizId" element={<Quiz />} />
           <Route path="/painel-administrador" element={<AdmPainel />} />

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
