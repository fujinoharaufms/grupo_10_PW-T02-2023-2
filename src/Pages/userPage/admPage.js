import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './admPage.css';
import { buscarQuizzes } from './caminho/para/sua/funcao/buscarQuizzes'; // Substitua pelo caminho correto


const AdminPanel = () => {
  const [quizzes, setQuizzes] = useState([]);
  
  useEffect(() => {
    buscarQuizzes().then(data => {
      setQuizzes(data);
    });
  }, []);

  
  return (
    <div className="responsive container-fluid p-5" style={{ backgroundColor: '#89bfb5' }}>
      <div className="row">
        {/* Perfil */}
        <div className="col-md-2 mb-4">
          <div className="text-center mb-3">
            <img src="../images/user.png" className="rounded-circle" width="70%" alt="Admin Avatar" />
            <h5 className="mt-2">Administrador</h5>
            <p>Fulano de Tal</p>
          </div>
          <div>
            <h5 className="mb-3">Outros Quizzes</h5>
            <div className="others p-3 mb-2 rounded">
              <img src="../images/land.png" alt="" />
              Título
            </div>
            <div className="others p-3 mb-2 rounded">
              <img src="../images/land.png" alt="" />
              Título
            </div>
            <div className="others p-3 mb-2 rounded">
              <img src="../images/land.png" alt="" />
              Título
            </div>
          </div>
        </div>

        {/* Detalhes do Quiz */}
        <div className="col-md-10">
          <div className="p-5 rounded">
            <div id="header">
              <img src="../images/land.png" alt="" />
              <div>
                <div className="edit">
                  <h4>Nome do Quizz</h4>
                  <img src="../images/editing.png" alt="" />
                </div>
                <div className="edit">
                  <p className="mt-3">Descrição</p>
                  <img src="../images/editing.png" alt="" />
                </div>
                <div className="edit">
                  <p className="mt-3">Palavras Chave:</p>
                  <img src="../images/editing.png" alt="" />
                </div>

                <div className="dropdown mt-2 mb-2">
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="quizTypeDropdown"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Tipo
                  </button>
                  <div className="dropdown-menu" aria-labelledby="quizTypeDropdown">
                    {/* Adicione os itens do dropdown aqui */}
                  </div>
                </div>
                <div className="dropdown mt-2 mb-2">
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="visibilityDropdown"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Visibilidade
                  </button>
                  <div className="dropdown-menu" aria-labelledby="visibilityDropdown">
                    {/* Adicione os itens do dropdown aqui */}
                  </div>
                </div>
              </div>
            </div>

            {/* Lista de questões */}
            <div className="questions p-3 my-2 rounded">
              Questão 1
              <span className="float-right">
                <div className="icons">
                  <img className="icon" src="../images/hide.png" alt="" />
                  <img className="icon" src="../images/editing.png" alt="" />
                  <img className="icon" src="../images/trash.png" alt="" />
                </div>
              </span>
            </div>

            <div className="questions p-3 my-2 rounded">
              Questão 2
              <span className="float-right">
                <div className="icons">
                  <img className="icon" src="../images/hide.png" alt="" />
                  <img className="icon" src="../images/editing.png" alt="" />
                  <img className="icon" src="../images/trash.png" alt="" />
                </div>
              </span>
            </div>
            <div className="questions p-3 my-2 rounded">
              Questão 3
              <span className="float-right">
                <div className="icons">
                  <img className="icon" src="../images/hide.png" alt="" />
                  <img className="icon" src="../images/editing.png" alt="" />
                  <img className="icon" src="../images/trash.png" alt="" />
                </div>
              </span>
            </div>
            <div className="questions p-3 my-2 rounded">
              Questão 4
              <span className="float-right">
                <div className="icons">
                  <img className="icon" src="../images/hide.png" alt="" />
                  <img className="icon" src="../images/editing.png" alt="" />
                  <img className="icon" src="../images/trash.png" alt="" />
                </div>
              </span>
            </div>
            <div className="questions p-3 my-2 rounded">
              Questão 5
              <span className="float-right">
                <div className="icons">
                  <img className="icon" src="../images/hide.png" alt="" />
                  <img className="icon" src="../images/editing.png" alt="" />
                  <img className="icon" src="../images/trash.png" alt="" />
                </div>
              </span>
            </div>
            {/* ... */}
            {/* Botões de ação */}
            <button className="btn btn-success mt-2">Adicionar Questões</button>
            <button className="btn btn-primary mt-2 ml-2">Salvar Estado</button>
            <button className="btn btn-danger mt-2 ml-2">Apagar Quizz</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
