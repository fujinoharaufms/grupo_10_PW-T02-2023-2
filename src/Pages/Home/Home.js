import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.modules.css';
import { collection, getDocs } from 'firebase/firestore'; // Importe as funções apropriadas do Firestore
import { db } from '../../fireBaseConnection';

//import images
import quiz from '../../imagens/quiz.png';

import userIcon from '../../imagens/user.png'; 
import people from '../../imagens/people.png';
const Home = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const quizzesPerPage = 10;

  // Função para buscar todos os quizzes no banco de dados
  const fetchQuizzes = async () => {
    try {
      const quizCollection = collection(db, 'quizzes'); // Substitua pelo nome da sua coleção

      const querySnapshot = await getDocs(quizCollection);
      const quizzesData = [];

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        quizzesData.push({
          id: doc.id,
          ...data,
        });
      });

      setQuizzes(quizzesData);
    } catch (error) {
      console.error('Erro ao buscar quizzes:', error);
    }
  };

  useEffect(() => {
    // Carregue todos os quizzes quando o componente for montado
    fetchQuizzes();
  }, []);

  // Função para calcular o índice inicial e final dos quizzes a serem exibidos na página atual
  const indexOfLastQuiz = currentPage * quizzesPerPage;
  const indexOfFirstQuiz = indexOfLastQuiz - quizzesPerPage;
  const currentQuizzes = quizzes.slice(indexOfFirstQuiz, indexOfLastQuiz);

  // Função para mudar a página atual
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    
    <div className="container mt-5">
      <div id='02'>
          <Link to="/painel-usuario">
            <img id="user" src={userIcon} alt="" />
          </Link>
        </div>
      {/* Header da página */}
      <div className="nav text-center mb-5">

        <div><img id="quiz" src={quiz} alt="" /> </div>
        
        

      </div>

      {/* Seção de botões de quizz */}
      <div className="row justify-content-center">
  {currentQuizzes.map((quiz) => (
    <div className="col-md-3 mb-4" key={quiz.id}>
      <div className="card">
        <div className="card-body text-center">
        
          <h5 className="card-title">{quiz.nomeQuizz}</h5> {/* Substitua pelo campo correto do seu quiz */}
          
          <Link to={`/quiz/${quiz.id}`} className="btn btn-primary">
            Iniciar Quiz
          </Link>
        </div>
      </div>
    </div>
  ))}
</div>

      {/* Paginação com Bootstrap */}
      <nav>
        <ul className="pagination justify-content-center">
          {Array(Math.ceil(quizzes.length / quizzesPerPage))
            .fill()
            .map((_, index) => (
              <li className={`page-item ${index + 1 === currentPage ? 'active' : ''}`} key={index}>
                <button className="page-link" onClick={() => paginate(index + 1)}>
                  {index + 1}
                </button>
              </li>
            ))}
        </ul>
      </nav>

      <div className="bigcard mb-4">
        <div className="card-body">
          <div className="wholecard">
            <img src="images/land.png" alt="" />
            <div className="card-content">
              <img src={people} alt="" />
              <p>Crie, Faça e Compartilhe os melhores Quizzes da Internet</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;