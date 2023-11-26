import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './visualizarQuiz.modules.css'; // Importe o CSS
import { buscarQuizzPorId, deleteQuestionById} from '../../hooks/admFunctions';
import hideIcon from '../../imagens/hide.png';
import editIcon from '../../imagens/editing.png';
import deleteIcon from '../../imagens/trash.png';

const View = () => {
    const { quizId } = useParams();
    const [quiz, setQuiz] = useState(null);
  
    useEffect(() => {
      const fetchQuizData = async () => {
        try {
          const data = await buscarQuizzPorId(quizId);
          setQuiz(data);
          console.log(data);
        } catch (error) {
          console.error('Erro ao buscar detalhes do quiz:', error);
        }
      };
  
      fetchQuizData();
    }, [quizId]);

  
    const handleDeleteQuestion = async (questionId) => {
      if (window.confirm('Você tem certeza que deseja apagar esta questão?')) {
        try {
          await deleteQuestionById(quizId, questionId);
          // Atualize o estado para refletir a questão removida
          setQuiz(prevQuiz => ({
            ...prevQuiz,
            questoes: prevQuiz.questoes.filter(q => q.id !== questionId),
          }));
        } catch (error) {
          console.error('Erro ao apagar questão:', error);
        }
      }
      
    };

  return (
    <div className="responsive container-fluid p-5" style={{ backgroundColor: '#89bfb5' }}>
      <div className="row">
        {/* Perfil */}
        <div className="col-md-2 mb-4 profile-section">
          {/* Conteúdo do perfil */}
        </div>

        {/* Detalhes do Quiz */}
        <div className="col-md-10 quiz-detail-section">
          <div className="quiz-detail-item">
            <div id="header">
              <h4>{quiz?.nomeQuizz}</h4>
              <p>{quiz?.descricao}</p>
              {/* ... Outros detalhes ... */}
            </div>

            {/* Lista de questões */}
            {quiz?.questoes?.map((questao, index) => (
              <div className="questions quiz-list-item" key={index}>
                <div>
                  <span>{questao.pergunta}</span>
                  <span className="float-right icons">
                    <img className="icon" src={editIcon} alt="Editar" />
                    <img className="icon" src={deleteIcon} alt="Apagar" onClick={() => handleDeleteQuestion(questao.id)} />
                  </span>
                </div>
              </div>
            ))}

            {/* Botões de ação */}
            <div className="d-flex gap-2">
              <button className="btn btn-success">Adicionar Questões</button>
              <button className="btn btn-primary">Salvar Estado</button>
              <button className="btn btn-danger">Apagar Quizz</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
