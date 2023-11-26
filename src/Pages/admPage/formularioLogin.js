import React, { useState } from 'react';
import logoImage from '../../imagens/IMAGENS_GERAIS__2_-removebg-preview.png';
import { useNavigate } from 'react-router-dom';

function LoginAdm() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault(); // Previne o comportamento padrão do formulário
        navigate('/verificar-admin', { state: { email, senha } });
    };

    return (
        <div className="container">
            <div className="row mx-auto text-center">
                <div className="col-md-3"></div>
                <div className="col-sm-6 text-center">
                    <img className="img-fluid imgLogo" src={logoImage} alt="Logo" />
                    <form className="boxCadastro" onSubmit={handleLogin}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label d-flex justify-content-start">E-mail</label>
                            <input 
                                type="email" 
                                className="form-control" 
                                id="email" 
                                placeholder="Seu e-mail" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                required 
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="senha" className="form-label d-flex justify-content-start">Senha</label>
                            <input 
                                type="password" 
                                className="form-control" 
                                id="senha" 
                                placeholder="Senha" 
                                value={senha} 
                                onChange={(e) => setSenha(e.target.value)} 
                                required 
                            />
                        </div>
                        <button type="submit" className="btn btn-primary custom-color mb-2">Fazer Login</button>
                    </form>
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
    );
}

export default LoginAdm;
