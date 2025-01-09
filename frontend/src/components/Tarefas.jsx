import {useState} from 'react';
import axios from 'axios';
import Styled from 'styled-components';




const TarefasContainer = Styled.section `
    display: flex;
    justify-content: center;
    
table {
    margin-top: 5%;

}
`


const Tarefas = () => {


    const [tarefas, setTarefas] = useState([])


    axios.get('http://localhost:3000/')
        .then(response => {
            setTarefas(response.data);
        })
        .catch(error => {
            console.log("Erro ao pegar dados do backend: ", error);
        }); 


    const alterarTarefa = (tarefa) => {
        
        const indice = {
            id: tarefa.id
        }

        axios.patch('http://localhost:3000/', indice)
            
           
    }

    return(
        <TarefasContainer>
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NOME DA TAREFA</th>
                        <th>STATUS</th>
                    </tr>
                </thead>
                <tbody>
                    {tarefas.map((tarefa, index) => (
                        <tr key={index}>
                            <td>{tarefa.id}</td>
                            <td>{tarefa.nome}</td>
                            <td>{tarefa.status}</td>
                            <button onClick={() => alterarTarefa(tarefa)}>Alterar</button>
                        </tr>
                    ))}
                </tbody>
                
            </table>
        </TarefasContainer>
    );


}

export default Tarefas