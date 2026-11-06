import { useState } from "react";
import api from "../../services/api";

export function Login({ onLoginSuccess }) {
    const [email, setEmail] = useState('rafaelflorindo@hotmail.com');
    const [senha, setSenha] = useState('123456');

    const autenticar = async (e) => {
        e.preventDefault();

        if (!email || !senha) {
            alert("Os campos de E-mail e Senha são obrigatórios!!!");
            return;
        }

        try {
            const response = await api.post('/responsaveis/autenticar', { email, senha });
            console.log("Autenticado com Sucesso!!!", response.data);

            // Avisa o App.js que o login deu certo para mudar a tela
            if (onLoginSuccess) {
                onLoginSuccess();
            }
        } catch (error) {
            console.log("Erro de autenticação!!!", error);
            alert("Erro de autenticação, verifique suas credenciais.");
        }
    };

    return (
        <section>
            <header>
                <h1>Formulário de Autenticação</h1>
                <p>Forneça o seu e-mail e a sua senha.</p>
            </header>
            <div>
                <form onSubmit={autenticar}>
                    <label>E-mail</label>
                    <input
                        type="text"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />

                    <label>Senha</label>
                    <input
                        type="password"
                        value={senha}
                        onChange={e => setSenha(e.target.value)}
                        required
                    />
                    <button type="submit">ACESSAR</button>
                </form>
            </div>
        </section>
    );
}