import React, { useEffect, useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { useAuthentication } from '../../hooks/useAuthentication';
import './usuarioPainel.modules.css';
import userImage from '../../imagens/user.png'; 
import speechBubbleImage from '../../imagens/speech-bubble.png';
import trophyImage from '../../imagens/trophy.png';
import starImage from '../../imagens/star.png';
import { acharNome } from '../../hooks/userFunction';


const PainelUser = () => {

    const { user } = useAuthentication();
    const navigate = useNavigate();
    const [nomeUsuario, setNomeUsuario] = useState('Carregando...');
  
    useEffect(() => {
      if (!user) {
        navigate('/Login'); // Substitua pelo caminho correto
      } else {
        acharNome(user.uid).then((nome) => {
          setNomeUsuario(nome);
        });
      }
    }, [user, navigate]);


  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <nav id="sidebar" className="col-md-3 col-lg-4 d-md-block bg-light sidebar">
          <div className="position-sticky pt-3">
            {/* Logo */}
            <div id="avatar" className="text-center py-3">
            <a href="#" id="responsive" className="btn widget-btn">
                <div>
                  <img src={userImage} width="85%" alt="Conquistas" />
                </div>
                <div></div>
              </a>
              <h5 className="mt-2">{nomeUsuario}</h5>
              <div id="pontuacao">
                <p>Melhor Pontuação</p>
                <p>Pior Pontuação</p>
              </div>
            </div>
            <hr id="bottom-black" />
            {/* Itens do Navbar */}
            <h3>Amigos Online</h3>
            <ul className="nav flex-column">
              {/* Lista de amigos - substitua por componentes dinâmicos conforme necessário */}
              <li className="nav-item">
              <a href='#' id="responsive" className="btn widget-btn">
                <div>
                  <img src={userImage} width="85%" alt="Conquistas" />
                </div>
                <div>Beltrano Borges</div>
              </a>
              </li>
              {/* Repita os itens conforme necessário */}
            </ul>
            <div id="navfooter">
              <a className="nav-link active" href="#">Ver Todos</a>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main id="main" className="col-md-9 ml-sm-auto col-lg-8 px-md-4">
          <div id="buttons-up" className="d-flex justify-content-center flex-column align-items-center pt-3 pb-2 mb-3">
            <a href="#" id="responsive" className="btn widget-btn mb-3">
              <img src={speechBubbleImage} width="70%" alt="Meus Quizzes" />
              <div>Meus Quizzes</div>
            </a>
            <div id="buttons" className="widget-container d-flex justify-content-between">
              <Link to='/Conquistas'>
              <a href="#" className="btn widget-btn">
                <img src={trophyImage} width="70%" alt="Conquistas" />
                <div>Conquistas</div>
              </a></Link>
              <a href="#" className="btn widget-btn">
                <img src={starImage} width="70%" alt="Favoritos" />
                <div>Favoritos</div>
              </a>
            </div>
          </div>
          {/* Seu conteúdo vai aqui */}
          <div className="settings-container mt-4">
            {/* Dropdown de Idioma */}
            <div className="dropdown mb-3">
              <button className="btn btn-secondary dropdown-toggle w-95 mx-auto d-block" type="button" id="languageDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                Idioma
              </button>
              {/* Dropdown menu aqui */}
            </div>
            {/* Campo para digitar o e-mail */}
            <div className="mb-3">
              <input type="email" className="form-control w-95 mx-auto d-block" id="emailInput" placeholder="nome@exemplo.com" />
            </div>
            {/* Dropdown para escolher o tamanho da fonte */}
            <div className="dropdown mb-3">
              <button className="btn btn-secondary dropdown-toggle w-95 mx-auto d-block" type="button" id="fontSizeDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                Tamanho da Fonte
              </button>
              {/* Dropdown menu aqui */}
            </div>
            {/* Botão de Notificações */}
            <button type="button" className="btn btn-primary w-95 mx-auto d-block">Notificações</button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PainelUser;
