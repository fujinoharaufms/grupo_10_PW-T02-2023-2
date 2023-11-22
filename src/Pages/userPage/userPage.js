import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './userPage.css';

const UsuarioPage = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <nav id="sidebar" className="col-md-3 col-lg-4 d-md-block">
          <div className="position-sticky">
            {/* Logo */}
            <div id="avatar" className="text-center py-3">
              <img src="../images/user.png" alt="Logo" width="38%" />
              <div id="Logo">
                <p>Fulano de Tal</p>
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
            <div className="settings-container mt-4">
              {/* Campo para digitar o e-mail */}
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control w-95 mx-auto d-block"
                  id="emailInput"
                  placeholder="nome@exemplo.com"
                />
              </div>

              {/* Dropdown de Notificações */}
              <div className="dropdown mb-3">
                <button
                  className="btn btn-secondary dropdown-toggle w-95 mx-auto d-block"
                  type="button"
                  id="languageDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Notificações
                </button>
              </div>

              {/* Dropdown para escolher o Idioma */}
              <div className="dropdown mb-3">
                <button
                  className="btn btn-secondary dropdown-toggle w-95 mx-auto d-block"
                  type="button"
                  id="fontSizeDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Idioma
                </button>
              </div>

              {/* Botão de Tamanho da Fonte */}
              <button type="button" className="btn btn-primary w-95 mx-auto d-block">
                Tamanho da Fonte
              </button>
            </div>
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
                  <img src="../images/balao-perguntas.png" width="85%" alt="" />
                </div>
                <div>Conquistas</div>
              </a>
              <a href="#" className="btn widget-btn">
                <div>
                  <img src="../images/editar-quizz.png" width="85%" alt="" />
                </div>
                <div>Favoritos</div>
              </a>
            </div>
            <div
              id="buttons"
              className="widget-container d-flex justify-content-between"
            >
              <a href="#" id="responsive" className="btn widget-btn">
                <div>
                  <img src="../images/quizzes-img.png" width="85%" alt="" />
                </div>
                <div>Conquistas</div>
              </a>
              <a href="#" className="btn widget-btn">
                <div>
                  <img src="../images/lupa-img.png" width="85%" alt="" />
                </div>
                <div>Favoritos</div>
              </a>
            </div>
          </div>
          {/* Seu conteúdo vai aqui */}
          <div className="col-md-12 mt-5 text-center">
            {/* Imagem */}
            <img
              id="logo"
              className="img-fluid"
              src="../images/IMAGENS_GERAIS__2_-removebg-preview.png"
              alt="Logo"
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default UsuarioPage;
