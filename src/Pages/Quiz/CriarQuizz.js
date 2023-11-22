import React, { useState } from 'react';
import { db, collection, addDoc } from '../../fireBaseConnection';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';


function CriarQuizz({ userId }) {


  const navigate = useNavigate();
  const [nomeQuizz, setNomeQuizz] = useState('');
  const [descricao, setDescricao] = useState('');
  const [formId, setFormId] = useState(null);
  const [tipo, setTipo] = useState('');
  const [visibilidade, setVisibilidade] = useState('');
  const [palavrasChave, setPalavrasChave] = useState('');

  // Função para salvar o estado do quizz no Firebase
  const salvarQuizz = async () => {
    try {
      const docRef = await addDoc(collection(db, 'quizzes'), {
        nomeQuizz,
        descricao,
        tipo,
        visibilidade,
        palavrasChave,
        userId: userId // Use o ID do usuário passado como propriedade
      });
  
      setFormId(docRef.id);
  
      navigate(`/questions/${docRef.id}`);
    } catch (error) {
      console.error("Erro ao salvar o quizz:", error);
    }
  };
 

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <div className="text-center p-3 mt-5">
            <i className="fa-regular fa-user adm"></i>
            <p>Administrador</p>
            <p>Nome do Usuário</p>
          </div>
          <div className="col-md-12 mt-5">
            <img
              id="logo"
              className="img-fluid"
              src="../images/IMAGENS_GERAIS__2_-removebg-preview.png"
              alt="Logo"
            />
          </div>
        </div>
        <div className="col-md-9">
          <h2 className="text-center mb-4">Configurações do Quizz</h2>
          <div className="mb-3">
            <label htmlFor="nomeQuizz" className="form-label">
              Nome do Quizz
            </label>
            <input
              type="text"
              className="form-control"
              id="nomeQuizz"
              value={nomeQuizz}
              onChange={(e) => setNomeQuizz(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="descricao" className="form-label">
              Descrição
            </label>
            <textarea
              className="form-control"
              id="descricao"
              rows="3"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="tipo" className="form-label">
              Tipo
            </label>
            <select
              className="form-select"
              id="tipo"
              value={tipo}
              onChange={(e) => setTipo(e.target.value)}
            >
              <option selected disabled>
                Selecione o tipo
              </option>
              <option value="História">História</option>
              <option value="Artes">Artes</option>
              <option value="K-pop">K-pop</option>
              <option value="Geral">Geral</option>
              {/* Adicione mais opções conforme necessário */}
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="visibilidade" className="form-label">
              Visibilidade
            </label>
            <select
              className="form-select"
              id="visibilidade"
              value={visibilidade}
              onChange={(e) => setVisibilidade(e.target.value)}
            >
              <option selected disabled>
                Selecione a visibilidade
              </option>
              <option value="todos">Todos</option>
              <option value="privada">Privada</option>
              <option value="amigos">Apenas Amigos</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="palavrasChave" className="form-label">
              Palavras-chave
            </label>
            <input
              type="text"
              className="form-control"
              id="palavrasChave"
              value={palavrasChave}
              onChange={(e) => setPalavrasChave(e.target.value)}
            />
          </div>
          <div className="mb-3 text-center">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => console.log('Adicionar Questões')}
            >
              Adicionar Questões
            </button>
            <button
              type="button"
              className="btn btn-success ms-2"
              onClick={salvarQuizz}
            >
              Salvar Estado
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CriarQuizz;
