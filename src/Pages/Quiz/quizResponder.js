import React, { useState, useEffect } from 'react';
import { collection, addDoc, doc, getDocs, getDoc } from 'firebase/firestore';
import { db } from '../../fireBaseConnection';
import { useParams } from 'react-router-dom';

const Quiz = () => {
  const { quizId } = useParams();
  console.log('quizId:', quizId); // Log do quizId

  const [quizData, setQuizData] = useState(null);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);

  
  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        // Buscar os detalhes do quiz
        const quizDocRef = doc(db, 'quizzes', quizId);
        const quizSnapshot = await getDoc(quizDocRef);
  
        if (quizSnapshot.exists()) {
          const data = quizSnapshot.data();
          setQuizData(data);
        } else {
          console.error('Quiz não encontrado');
        }
  
        // Buscar as questões associadas ao quiz
        const questoesRef = collection(db, 'quizzes', quizId, 'questoes');
        const querySnapshot = await getDocs(questoesRef);
  
        const questoesArray = [];
        querySnapshot.forEach((doc) => {
          questoesArray.push(doc.data());
        });
  
        setQuizData(prevState => ({ ...prevState, questoes: questoesArray }));
  
      } catch (error) {
        console.error('Erro ao buscar informações do quiz:', error);
      }
    };
  
    fetchQuizData();
  }, [quizId]);

  const handleAnswerSelection = (questionIndex, selectedOption) => {
    console.log(`Resposta selecionada para a questão ${questionIndex}:`, selectedOption); // Log da resposta selecionada
    const updatedAnswers = [...userAnswers];
    updatedAnswers[questionIndex] = selectedOption;
    setUserAnswers(updatedAnswers);
  };

  const calculateScore = () => {
    console.log('Calculando pontuação'); // Log ao iniciar cálculo da pontuação
    let userScore = 0;
    quizData?.questoes?.forEach((question, index) => {
      if (userAnswers[index] === question.respostaCorreta) {
        userScore++;
      }
    });
    console.log('Pontuação calculada:', userScore); // Log da pontuação calculada
    setScore(userScore);
  };

  const saveScore = async () => {
    if (quizData && quizData.userId) {
      try {
        const scoresCollection = collection(db, 'scores');
        await addDoc(scoresCollection, {
          userId: quizData.userId, // Usando o userId do quizData
          quizId: quizId, // Supondo que quizId é uma string
          score,
        });
        console.log('Pontuação salva com sucesso:', score);
      } catch (error) {
        console.error('Erro ao salvar pontuação:', error);
      }
    } else {
      console.log('Informação do userId não disponível');
    }
  };
  return (
    <div>
      <h1>{quizData?.nomeQuizz}</h1>
      {quizData?.questoes?.map((question, index) => (
        <div key={question.id || index}>
          <h2>{question.pergunta}</h2>
          <ul>
            {question.opcoes.map((option, optionIndex) => (
              <li key={optionIndex}>
                <label>
                  <input
                    type="radio"
                    name={`question_${index}`}
                    value={option}
                    onChange={() => handleAnswerSelection(index, option)}
                  />
                  {option}
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <button onClick={() => { calculateScore(); saveScore(); }}>Finalizar Quiz</button>
      <p>Pontuação: {score}</p>
    </div>
  );
};

export default Quiz;