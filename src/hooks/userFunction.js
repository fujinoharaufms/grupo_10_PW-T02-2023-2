import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../fireBaseConnection';

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
