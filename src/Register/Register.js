import React, { useState } from 'react';
import './Register.modules.css'; // Importando o CSS
import logoImage from '../imagens/IMAGENS_GERAIS__2_-removebg-preview.png';
import { useAuthentication } from '../hooks/useAuthentication';
import { toast, ToastContainer } from 'react-toastify';


function Register() {
  const [usuario, setUsuario] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

   const { createUser, error, loading } = useAuthentication();
   const authError = error;

  const handleUsuarioChange = (e) => setUsuario(e.target.value);
  const handleNomeChange = (e) => setNome(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleSenhaChange = (e) => setSenha(e.target.value);

  const notify = () => toast("Usuário cadastrado com Sucesso");

  // Função para lidar com o envio do formulário
  const handleSubmit = async (e) => {
    e.preventDefault(); // Impede o recarregamento da página
   
    const usuarioEnviado = {
        usuario, 
        nome, 
        email,
        senha
    };
    
    //POssível validação de senha

    const respostaCriacao = await createUser(usuarioEnviado); 

    if (respostaCriacao) {
        // Se o usuário foi criado com sucesso, limpa os campos
        setUsuario("");
        setNome("");
        setEmail("");
        setSenha("");

        notify();
      }

      

    console.log(usuarioEnviado);
  };

  return (
    <div className="container">
        <ToastContainer />
        <div className="row mx-auto text-center">
        <div className="col-md-3"></div>
        <div className="col-sm-6 text-center">
        
        { <img className="img-fluid imgLogo" src={logoImage} alt="Logo" /> }
        <form className="boxCadastro" onSubmit={handleSubmit}>
        {/* ... outros campos ... */}
        <div className="mb-3">
          <label htmlFor="usuario" className="form-label d-flex justify-content-start">Usuário</label>
          <input type="text" className="form-control" id="usuario" placeholder="Nome de usuário" value={usuario} onChange={handleUsuarioChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="nome" className="form-label d-flex justify-content-start">Nome</label>
          <input type="text" className="form-control" id="nome" placeholder="Seu nome" value={nome} onChange={handleNomeChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label d-flex justify-content-start">E-mail</label>
          <input type="email" className="form-control" id="email" placeholder="Seu e-mail" value={email} onChange={handleEmailChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="senha" className="form-label d-flex justify-content-start">Senha</label>
          <input type="password" className="form-control" id="senha" placeholder="Senha" value={senha} onChange={handleSenhaChange} required />
          </div>
            <button type="submit" className="btn btn-primary custom-color mb-2">Finalizar Cadastro</button>
          </form>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
}

export default Register;
