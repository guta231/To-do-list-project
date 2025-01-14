import Styled from "styled-components";
import { useState } from "react";
import axios from "axios";

const Input = Styled.input`
    border: 1px solid #000;
    border-radius: 10px;
    height: 20px;
    width: 15vw;
`;

const Form = Styled.form`
    display: flex;
    justify-content: center;
    margin-top: 25vh;

    button {
        color: #2E8B57;
    }
`;
const Sectionpesquisa = Styled.section`
    display: flex;
    justify-content: center;

ul{
    list-style-type: none;
    line-height: 3.0;

}
`

const Pesquisa = () => {
    const [pesquisa, setPesquisa] = useState("");
    const [listaDeTarefas, setListaDeTarefas] = useState([]); // Lista completa de tarefas
    const [resultadoPesquisa, setResultadoPesquisa] = useState([]); // Resultados da pesquisa

    const pesquisar = (e) => {
        e.preventDefault(); // Previne o comportamento padrão do formulário

        axios.get("http://localhost:3000/")
        .then(response => {
            setListaDeTarefas(response.data);

            setResultadoPesquisa(listaDeTarefas.filter((tarefa) => tarefa.nome === pesquisa));
        })
        .catch(error => {
            console.log("Erro ao ter resposta do servidor", error);
        })
    };

    return (
        <section>
            <Form onSubmit={pesquisar}>
                <Input
                    type="text"
                    placeholder="Pesquise a tarefa..."
                    value={pesquisa}
                    onChange={(e) => setPesquisa(e.target.value)}
                />
                <button type="submit">Pesquisar</button>
            </Form>
            <Sectionpesquisa>
                <ul>
                    {resultadoPesquisa.map((tarefa, index) => (
                        <li key={index}>Nome: {tarefa.nome} / Status: {tarefa.status}</li>
                    ))}
                </ul>
            </Sectionpesquisa>
        </section>
    );
};

export default Pesquisa;
