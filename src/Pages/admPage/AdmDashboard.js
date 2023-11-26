import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AdmDash.modules.css';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import userImage from '../../imagens/user.png';
import balaoPerguntasImage from '../../imagens/balao-perguntas.png'
import editarQuizzImage from '../../imagens/editar-quizz.png';
import quizzesImg from '../../imagens/quizzes-img.png';
import lupaImg from '../../imagens/lupa-img.png';
import logoImage from '../../imagens/IMAGENS_GERAIS__2_-removebg-preview.png';
import { acharNome } from '../../hooks/admFunctions'; // Substitua pelo caminho correto


const AdmPainel = () => {

  const location = useLocation();
  const [adminName, setAdminName] = useState('Carregando...');

  useEffect(() => {
    const buscarNomeAdmin = async () => {
      const { email } = location.state || {};
      if (email) {
        const nome = await acharNome(email);
        setAdminName(nome);
      } else {
        setAdminName('Email não fornecido');
      }
    };

    buscarNomeAdmin();
  }, [location.state]);

  const navigate = useNavigate();

  const { email, senha } = location.state || {};

  // Redireciona se email ou senha não estiverem presentes
  if (!email || !senha) {
    navigate('/LoginAdm'); // Substitua '/login' pelo caminho da sua página de login
    return null; // Retorna nulo enquanto o redirecionamento não é concluído
  }


  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <nav id="sidebar" className="col-md-3 col-lg-4 d-md-block">
          <div className="position-sticky">
            {/* Logo */}
            <div id="avatar" className="text-center py-3">
              <img src={userImage} alt="Perfil" width="38%" />
              <div id="Logo">
              <p>{adminName}</p>
                <div id="pontuacao">
                  <p>Melhor Pontuação</p>
                  <p>Pior Pontuação</p>
                </div>
              </div>
            </div>
            <div>
              <hr id="bottom-black" />
            </div>
            {/* Itens do Navbar */}
            <h3>Amigos Online</h3>
            {/* ... Adicione mais conteúdo aqui conforme necessário ... */}
            <div id="navfooter">
              <a className="nav-link active" href="#">
                Ver Todos
              </a>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main id="main" className="col-md-9 ml-sm-auto col-lg-8 px-md-4">
          <div
            id="buttons-up"
            className="d-flex justify-content-center flex-column align-items-center pt-3 pb-2 mb-3"
          >
            <div
              id="buttons"
              className="widget-container d-flex justify-content-between pb-3"
            >
              <a href="#" id="responsive" className="btn widget-btn">
                <div>
                  <img src={balaoPerguntasImage} width="85%" alt="Conquistas" />
                </div>
                <div>Criar Quizz</div>
              </a>
              <a href="#" className="btn widget-btn">
                <div>
                  <img src={editarQuizzImage} width="85%" alt="Favoritos" />
                </div>
                <div>Editar Quizz</div>
              </a>
            </div>
            <div
              id="buttons"
              className="widget-container d-flex justify-content-between"
            >
              <a href="#" id="responsive" className="btn widget-btn">
                <div>
                  <img src={quizzesImg} width="85%" alt="Conquistas" />
                </div>
                <div>Meus Quizzes</div>
              </a>

              <Link to='/listar-quizzes-adm'><a href="#" className="btn widget-btn">
                <div>
                  <img src={lupaImg} width="85%" alt="Favoritos" />
                </div>
                <div>Buscar Quizz</div>
              </a></Link>
            </div>
          </div>
          {/* Seu conteúdo vai aqui */}
          <div className="col-md-12 mt-5 text-center">
            {/* Imagem */}
            <img
              id="logo"
              className="img-fluid"
              src={logoImage}
              alt="Logo"
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdmPainel;
