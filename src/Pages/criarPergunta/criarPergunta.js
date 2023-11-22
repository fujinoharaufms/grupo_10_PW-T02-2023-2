import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage } from '@fortawesome/free-solid-svg-icons';

import 'bootstrap/dist/css/bootstrap.min.css';
import './criarPergunta.css';

function criarPergunta() {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar para mostrar perguntas */}
        <div className="col-md-3 mt-5 ml-3">
          <div className="text-center">
            <FontAwesomeIcon icon={['far', 'user']} className="adm" />
            <p>Administrador</p>
            <p>Nome do Usuário</p>
          </div>
          <div className="sidebar p-2 border border-black">
            <h3>Perguntas Criadas</h3>
            <ul>
              <li>Pergunta 1</li>
              <li>Pergunta 2</li>
              {/* Adicione mais perguntas conforme necessário */}
            </ul>
          </div>
        </div>

        {/* Área principal para criar perguntas */}
        <div className="col-md-8">
          <div className="m-3">
            <h2>Criar Pergunta</h2>

            {/* Formulário para criar uma nova pergunta */}
            <form>
              <div className="mb-3">
                <label htmlFor="pergunta">Pergunta:</label>
                <textarea className="form-control" id="pergunta" rows="3"></textarea>
              </div>

              <div className="mb-3">
                <label htmlFor="imagem">Imagem:</label>
                <div className="input-group">
                  <span className="upload-icon">
                    <FontAwesomeIcon icon={faImage} />
                  </span>
                  <input type="file" className="form-control" id="imagem" />
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="opcoes">Opções:</label>
                <div className="circle-input-group">
                  <div className="circle-input">
                    <input type="text" placeholder="Opção 1" />
                  </div>
                  <div className="circle-input">
                    <input type="text" placeholder="Opção 2" />
                  </div>
                </div>
                <div className="circle-input-group">
                  <div className="circle-input">
                    <input type="text" placeholder="Opção 3" />
                  </div>
                  <div className="circle-input">
                    <input type="text" placeholder="Opção 4" />
                  </div>
                </div>
              </div>

              <div className="text-center align-self-center">
                <button type="button" className="btn btn-primary">
                  Salvar Questão
                </button>
                <button type="button" className="btn btn-secondary">
                  Adicionar Outra
                </button>
                <button type="button" className="btn btn-danger">
                  Limpar Respostas
                </button>
              </div>
            </form>
            <img
              id="logo"
              className="rounded mx-auto d-block float-end"
              src="../images/IMAGENS_GERAIS__2_-removebg-preview.png"
              alt="Logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default criarPergunta;
