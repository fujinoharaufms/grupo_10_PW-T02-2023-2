import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useUserScore } from '../../hooks/userFunction';
import { useAuthentication } from '../../hooks/useAuthentication';
import trofeu1 from '../../imagens/trofeu.svg.svg';
import trofeu2 from '../../imagens/trofeu-2.svg'; // Caminho para sua imagem de troféu 2
import trofeu3 from '../../imagens/trofeu-3.svg';



const Conquistas = () => {

    const { user } = useAuthentication(); 
    const userId = user?.uid; // Acessando o ID do usuário logado
    const { score, isConquista } = useUserScore(userId);

    console.log(score);

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <div className="col-sm-3 sidebar text-center">
          <i className="fas fa-user adm"></i>
          <h3 className="mt-3">Nome do Usuário</h3>
          <hr />
          <div className="quizz-box mt-3">Quizz1</div>
          <div className="quizz-box mt-3">Quizz2</div>
          <div className="quizz-box mt-3">Quizz3</div>

          <div className="d-flex align-items-center mt-5">
            <i className="fa-solid fa-plus more"></i>
            <h4 className="d-inline" id="verMais">Ver mais</h4>
          </div>
        </div>

        {/* Conteúdo principal */}
        <div className="col-sm-9 main d-flex flex-column align-items-center">
          <h2 className="m-4">Lista de Conquistas</h2>

          {isConquista && (
                        <>
                            {[trofeu1, trofeu2, trofeu3].map((trofeu, index) => (
                                <div className="card mb-3 text-center border-0" key={index}>
                                    <div className="row g-0">
                                        <div className="col-sm-4">
                                            <img src={trofeu} className="img-fluid trofeu pt-3 mr-5" alt="Ícone de troféu" />
                                        </div>
                                        <div className="col-sm-8">
                                            <div className="card-body">
                                                <h5 className="card-title">Conquista</h5>
                                                <p className="card-text">Texto explicando a conquista</p>
                                                <p className="card-text"><small className="text-body-secondary">Data</small></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </>
                    )}

          <div className="d-flex justify-content-center">
            <button type="button" className="btn btn-primary btn-icon mx-1"><i className="fas fa-user-friends"></i> Convidar Amigo</button>
            <button type="button" className="btn btn-success btn-icon mx-1"><i className="fas fa-share"></i> Compartilhar Conquistas</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conquistas;
