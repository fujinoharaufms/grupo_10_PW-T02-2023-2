import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './questionPage.css';

const questionPage = () => {
  return (
    <div className="container-fluid">
      <div className="row mx-auto text-center">
        {/* Barra lateral esquerda de perfil com os contatos */}
        <div className="col-md-3 custom-colorBar">
          <img
            className="img"
            src="../images/IMAGENS_GERAIS__2_-removebg-preview.png"
            alt="Imagem ilustrativa de perfil pessoal"
          />
          <div>
            <p className="usuario">Usuário : Santos Dumont</p>
          </div>
          <hr />
          <ul className="list-group mb-3">
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Napoleão Bonaparte
              <span className="badge bg-success">Online</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Ramsés II
              <span className="badge bg-success">Online</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              José Bonifácio
              <span className="badge bg-success">Online</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Monteiro Lobato
              <span className="badge bg-success">Online</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
              Ayerton Senna
              <span className="badge bg-success">Online</span>
            </li>
            {/* Adicione mais amigos online conforme necessário */}
          </ul>
          <div className="mb-2 d-flex justify-content-end">
            <button type="submit" className="btn custom-btn-1">
              Ver todos
            </button>
          </div>
        </div>

        {/* Questionamento + Barra de respostas */}
        <div className="col-sm-9 text-center">
          <h3 className="d-flex justify-content-start">Quizz : X - Questão 3/10</h3>
          <img className="img-fluid mb-4" src="../images/vVbxw.png" alt="Logo" />

          <form className="boxRespostas mb-4">
            <div className="mb-3">
              <button type="submit" className="btn btn-primary custom-color1 estilo">
                Essa é a resposta escolhida pelo usuário para a questão
              </button>
            </div>
            <div className="mb-3">
              <button type="submit" className="btn btn-primary custom-color2 estilo">
                Essa é a resposta escolhida pelo usuário para a questão
              </button>
            </div>
            <div className="mb-3">
              <button type="submit" className="btn btn-primary custom-color3 estilo">
                Essa é a resposta escolhida pelo usuário para a questão
              </button>
            </div>
            <div className="mb-3">
              <button type="submit" className="btn btn-primary custom-color4 estilo">
                Essa é a resposta escolhida pelo usuário para a questão
              </button>
            </div>
          </form>

          {/* Botoes no final da página - "Voltar" e "Próxima questão" */}
          <div className="d-flex justify-content-between">
            <button type="submit" className="btn btn-primary ml-auto" id="teste">
              Voltar
            </button>
            <button type="submit" className="btn btn-primary mr-auto" id="teste">
              Próxima questão
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default questionPage;
