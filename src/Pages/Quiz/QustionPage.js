import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { collection, addDoc } from 'firebase/firestore'; // Importe as funções apropriadas do Firestore
import { db } from '../../fireBaseConnection';

function QuestionPage() {
  const { formId } = useParams();
  const [pergunta, setPergunta] = useState('');
  const [opcoes, setOpcoes] = useState(['', '', '', '']);
  const [respostaCorreta, setRespostaCorreta] = useState('');

  const handleAddQuestion = async () => {
    const novaPergunta = {
      pergunta,
      opcoes,
      respostaCorreta,
    };

    try {
      // Acesse a coleção "questoes" (substitua pelo nome da sua coleção no Firestore)
      const questoesRef = collection(db, 'quizzes', formId, 'questoes');

      // Adicione um documento à coleção com os dados da pergunta
      await addDoc(questoesRef, novaPergunta);

      // Limpe os campos após adicionar a pergunta
      setPergunta('');
      setOpcoes(['', '', '', '']);
      setRespostaCorreta('');

      console.log('Pergunta adicionada ao quizz com ID:', formId);
    } catch (error) {
      console.error('Erro ao adicionar pergunta:', error);
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
        </div>
        <div className="col-md-8">
          <h2 className="text-center mb-4">Criar Pergunta</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="pergunta" className="form-label">
                Pergunta:
              </label>
              <textarea
                className="form-control"
                id="pergunta"
                rows="3"
                value={pergunta}
                onChange={(e) => setPergunta(e.target.value)}
              ></textarea>
            </div>

            <div className="mb-3">
              <label htmlFor="opcoes" className="form-label">
                Opções:
              </label>
              <div className="circle-input-group">
                {opcoes.map((opcao, index) => (
                  <div className="circle-input" key={index}>
                    <input
                      type="text"
                      placeholder={`Opção ${index + 1}`}
                      value={opcao}
                      onChange={(e) => {
                        const newOpcoes = [...opcoes];
                        newOpcoes[index] = e.target.value;
                        setOpcoes(newOpcoes);
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="respostaCorreta" className="form-label">
                Resposta Correta:
              </label>
              <select
                className="form-select"
                id="respostaCorreta"
                value={respostaCorreta}
                onChange={(e) => setRespostaCorreta(e.target.value)}
              >
                <option value="">Selecione a resposta correta</option>
                {opcoes.map((opcao, index) => (
                  <option key={index} value={opcao}>
                    {opcao}
                  </option>
                ))}
              </select>
            </div>

            <div className="text-center align-self-center">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleAddQuestion}
              >
                Salvar Questão
              </button>
              <Link to="/">
                 <button className="btn btn-primary">Ir para a Página Inicial</button>
             </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default QuestionPage;
