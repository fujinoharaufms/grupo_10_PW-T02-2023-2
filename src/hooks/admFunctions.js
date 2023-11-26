import { collection, query, where, getDocs, doc, getDoc,  deleteDoc } from 'firebase/firestore';
import { db } from '../fireBaseConnection';


// Função para buscar o nome de um administrador com base no email
export const acharNome = async (email) => {
  try {
    const q = query(collection(db, "administradores"), where("email", "==", email));
    const querySnapshot = await getDocs(q);
    const adminData = querySnapshot.docs.map(doc => doc.data())[0]; // Pegando o primeiro administrador correspondente

    if (adminData) {
        console.log(adminData.nome);
      return adminData.nome; // Retorna o nome do administrador
    } else {
      return 'Administrador não encontrado.';
    }
  } catch (error) {
    console.error("Erro ao buscar administrador:", error);
    return 'Erro ao buscar administrador.';
  }
};

// Função para buscar todos os quizzes da coleção 'quizzes'
export const buscarQuizzes = async () => {
  try {
    const quizCollectionRef = collection(db, "quizzes");
    const querySnapshot = await getDocs(quizCollectionRef);
    const quizzes = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    return quizzes; // Retorna a lista de quizzes
  } catch (error) {
    console.error("Erro ao buscar quizzes:", error);
    return []; // Retorna uma lista vazia em caso de erro
  }
};

export const buscarQuizzPorId = async (quizId) => {
  try {
    // Buscar detalhes do quiz
    const quizDocRef = doc(db, 'quizzes', quizId);
    const quizSnapshot = await getDoc(quizDocRef);

    if (!quizSnapshot.exists()) {
      console.error('Quiz não encontrado');
      return null;
    }

    const quizData = quizSnapshot.data();

    // Buscar questões relacionadas ao quiz
    const questoesRef = collection(db, 'quizzes', quizId, 'questoes');
    const querySnapshot = await getDocs(questoesRef);

    const questoesArray = [];
    querySnapshot.forEach((doc) => {
      // Aqui incluímos o ID da questão
      questoesArray.push({
        id: doc.id,
        ...doc.data()
      });
    });

    // Combinar dados do quiz com suas questões
    return {
      ...quizData,
      questoes: questoesArray,
    };
  } catch (error) {
    console.error('Erro ao buscar quiz:', error);
    return null;
  }
};


export const deleteQuestionById = async (quizId, questionId) => {
  try {
    // Caminho para a questão específica no Firestore
    const questionRef = doc(db, 'quizzes', quizId, 'questoes', questionId);
    console.log(quizId, questionId);

    // Exclui a questão
    await deleteDoc(questionRef);

    console.log(`Questão com ID ${questionId} foi excluída com sucesso.`);
  } catch (error) {
    console.error('Erro ao excluir questão:', error);
    throw new Error('Erro ao excluir questão.');
  }
};

export const deleteQuizById = async (quizId) => {
  try {
    // Obter a referência do documento do quizz
    const quizDocRef = doc(db, 'quizzes', quizId);
    
    // Excluir o documento do quizz
    await deleteDoc(quizDocRef);
    
    console.log(`Quiz com ID ${quizId} foi excluído com sucesso.`);
  } catch (error) {
    console.error('Erro ao excluir quiz:', error);
    throw new Error(error);
  }
};