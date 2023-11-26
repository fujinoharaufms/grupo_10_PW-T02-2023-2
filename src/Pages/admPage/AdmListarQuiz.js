import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AdmListarQuiz.modules.css'; // Caminho do CSS
import userImage from '../../imagens/user.png'; 
import quizImage from '../../imagens/quiz.png';

// Função para buscar quizzes - substitua pelo caminho correto
import { buscarQuizzes } from '../../hooks/admFunctions';
  
    const QuizzesList = () => {
        const [quizzes, setQuizzes] = useState([]);
        const [searchTerm, setSearchTerm] = useState('');
    
        useEffect(() => {
            const fetchQuizzes = async () => {
                try {
                    const fetchedQuizzes = await buscarQuizzes();
                    setQuizzes(fetchedQuizzes);
                } catch (error) {
                    console.error('Erro ao buscar quizzes:', error);
                }
            };
    
            fetchQuizzes();
        }, []);
    
        const quizzesToRender = searchTerm
            ? quizzes.filter(quiz => quiz.nomeQuizz && quiz.nomeQuizz.toLowerCase().includes(searchTerm.toLowerCase()))
            : quizzes;
    
  
    return (
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="admin mb-4">
              <img src={userImage} width="60%" alt="" />
              <h4 className="text-center mt-2">Administrador</h4>
              <p className="text-center">Fulano de Tal</p>
            </div>
  
            {/* ... Filtros adicionais ... */}
            <img id="quiz" src={quizImage} alt="" />
          </div>
          <div className="col-lg-8 col-md-6 col-sm-12">
            <div className="mb-4 search-container">
              <input
                id="color"
                type="text"
                className="form-control search-input"
                placeholder="Pesquisar"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />
              <i className="fas fa-search search-icon"></i>
            </div>
  
            {/* Renderização dinâmica dos cards de quizzes com filtro aplicado */}
            {quizzesToRender.map((quiz, index) => (
        <div className="card mb-4" key={index}>
            <Link to={`/quiz-view/${quiz.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="card-body">
                <div className="wholecard">
                <div className="card-content">
                <h2 className="card-title mb-3">{quiz.nomeQuizz}</h2> {/* Adiciona espaço abaixo do h2 */}
        <h4 className="card-description">{quiz.descricao}</h4> {/* h4 aparece abaixo do h2 */}
                </div>
                <p className="edition">{quiz.lastEdited}</p>
                </div>
            </div>
            </Link>
        </div>
        ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default QuizzesList;