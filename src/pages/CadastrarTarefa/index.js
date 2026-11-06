import { useState } from 'react';
import api from '../../services/api';
import './index.css';

export function CadastrarTarefa(){
    // Inicializamos com string vazia para evitar undefined
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [preco, setPreco] = useState('');
    const [data_limite, setData_limite] = useState('');
    const [tempo_estimado, setTempo_estimado] = useState('');
    const [responsavel, setResponsavel] = useState(1);    

    const cadastrarTarefa = async (e) => {
        e.preventDefault();

        // Validação simples
        if (!titulo || !descricao || !preco || !tempo_estimado || !data_limite || !responsavel) {
            alert("Todos os campos são obrigatórios.");
            return;
        }        

        try {
            const resposta = await api.post('/tarefas', {
                titulo,
                descricao,
                preco: Number(preco),
                tempo_estimado: Number(tempo_estimado),
                data_limite,
                responsavelId: Number(responsavel),
            });

            console.log("Sucesso:", resposta.data);
            alert("Tarefa cadastrada com sucesso!");
            
            // Opcional: limpar os campos após o cadastro
            setTitulo('');
            setDescricao('');
            setPreco('');
            setData_limite('');
            setTempo_estimado('');

        } catch (error) {
            console.error("Erro na requisição:", error);
           // alert(error.response?.data?.message || "Não foi possível cadastrar a tarefa.");

console.error("Erro completo:", error);
    if (error.response) {
        // O servidor respondeu com um status de erro (ex: 400, 422, 500)
        console.error("Dados do erro:", error.response.data);
        console.error("Status do erro:", error.response.status);
        alert(`Erro ${error.response.status}: ${error.response.data?.message || JSON.stringify(error.response.data)}`);
    } else if (error.request) {
        // A requisição foi feita mas NENHUMA resposta foi recebida (API fora do ar ou CORS bloqueando o POST)
        console.error("Nenhuma resposta recebida:", error.request);
        alert("A API não respondeu. Verifique se o servidor backend está rodando.");
    } else {
        // Erro ao configurar a requisição
        console.error("Erro de configuração:", error.message);
        alert("Erro ao enviar requisição: " + error.message);
    }

        }
    }

    return(
        <section>
            <header>
                <h1>Formulário para Cadastro de Tarefa</h1>
            </header>
            <div>
                <form onSubmit={cadastrarTarefa}>
                    <label>Título:</label>
                    <input 
                        placeholder='Informe o nome: Ex: José da Silva'
                        type='text'
                        value={titulo}
                        onChange={e => setTitulo(e.target.value)}
                        required
                    />

                    <label>Descrição:</label>
                    {/* CORRIGIDO: Textarea no React não usa conteúdo interno */}
                    <textarea 
                        placeholder='Descreva a tarefa: Ex: Implementar Database'
                        value={descricao}
                        onChange={e => setDescricao(e.target.value)}
                        required
                    />
                    
                    <label>Preço:</label>
                    <input 
                        placeholder='Informe o valor: Ex: 0.00'
                        type='number'
                        step='0.01'
                        value={preco}
                        onChange={e => setPreco(e.target.value)}
                        required
                    />

                    <label>Data Limite:</label>
                    <input 
                        type='date'
                        value={data_limite}
                        onChange={e => setData_limite(e.target.value)}
                        required
                    />
                    
                    <label>Tempo Estimado (horas):</label>
                    <input 
                        placeholder='Ex: 72'
                        type='number'
                        value={tempo_estimado}
                        onChange={e => setTempo_estimado(e.target.value)}
                        required
                    />

                    <button type='submit'>Salvar</button>
                </form>

                <div>
                    <p>{titulo}</p>
                    <p>{descricao}</p>
                    <p>{preco}</p>
                    <p>{data_limite}</p>
                    <p>{tempo_estimado}</p>
                </div>
            </div>
        </section>
    )
}