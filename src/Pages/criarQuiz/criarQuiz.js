import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './criarQuiz.css';

const CriarQuizz = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          {/* Ícone de usuário e informações */}
          <div className="text-center p-3 mt-5">
            <i className="fa-regular fa-user adm"></i>
            <p>Administrador</p>
            <p>Nome do Usuário</p>
          </div>
          <div className="col-md-12 mt-5">
            {/* Imagem */}
            <img id="logo" className="img-fluid" src="../images/IMAGENS_GERAIS__2_-removebg-preview.png" alt="Logo" />
          </div>
        </div>
        <div className="col-md-9">
          {/* Área principal para configurações */}
          <h2 className="text-center mb-4">Configurações do Quizz</h2>
          <div className="mb-3">
            <label htmlFor="nomeQuizz" className="form-label">Nome do Quizz</label>
            <input type="text" className="form-control" id="nomeQuizz" />
          </div>
          <div className="mb-3">
            <label htmlFor="descricao" className="form-label">Descrição</label>
            <textarea className="form-control" id="descricao" rows="3"></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="tipo" className="form-label">Tipo</label>
            <select className="form-select" id="tipo">
              <option selected disabled>Selecione o tipo</option>
              <option value="tipo1">Tipo 1</option>
              <option value="tipo2">Tipo 2</option>
              {/* Adicione mais opções conforme necessário */}
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="visibilidade" className="form-label">Visibilidade</label>
            <select className="form-select" id="visibilidade">
              <option selected disabled>Selecione a visibilidade</option>
              <option value="todos">Todos</option>
              <option value="privada">Privada</option>
              <option value="amigos">Apenas Amigos</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="palavrasChave" className="form-label">Palavras-chave</label>
            <input type="text" className="form-control" id="palavrasChave" />
          </div>
          <div className="mb-3 text-center">
            <button type="button" className="btn btn-primary">Adicionar Questões</button>
            <button type="button" className="btn btn-success ms-2">Salvar Estado</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CriarQuizz;
