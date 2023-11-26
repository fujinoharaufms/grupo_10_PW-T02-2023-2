import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../fireBaseConnection';
import { useState, useEffect } from 'react';


// Função para buscar o nome de um usuário com base no seu ID
export const acharNome = async (userId) => {
  try {
    const q = query(collection(db, "usuarios"), where("userId", "==", userId));
    const querySnapshot = await getDocs(q);
    const userData = querySnapshot.docs.map(doc => doc.data())[0]; // Pegando o primeiro usuário correspondente

    if (userData) {
        console.log(userData.nome);
      return userData.nome; // Retorna o nome do usuário
    } else {
      return 'Usuário não encontrado.';
    }
  } catch (error) {
    console.error("Erro ao buscar usuário:", error);
    return 'Erro ao buscar usuário.';
  }
};

export const useUserScore = (userId) => {
  const [score, setScore] = useState(0);
  console.log(userId);
  const [isConquista, setIsConquista] = useState(false);

  useEffect(() => {
    const fetchUserScore = async () => {
      try {
        // Substitua 'user_scores' pelo nome da coleção onde os scores são guardados
        const scoresRef = collection(db, 'user_scores');
        const q = query(scoresRef, where("userId", "==", userId));
        const querySnapshot = await getDocs(q);

        // O score pode ser a contagem de documentos encontrados
        const userScore = querySnapshot.docs.length;
        setScore(userScore);
        
        // Verifica se é uma conquista
        setIsConquista(userScore > 3);
      } catch (error) {
        console.error('Erro ao buscar score do usuário:', error);
      }
    };

    if (userId) {
      fetchUserScore();
    }
  }, [userId]);

  return { score, isConquista };
};