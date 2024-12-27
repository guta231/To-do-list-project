import {useState} from 'react';
import axios from 'axios'
import Styled from 'styled-components';



const SectionForm = Styled.section `
    display: flex;
    justify-content: center;
    
`

const AddForm = Styled.form `
    width: 25%;
    height: 25vh;
    display: flex;
    margin-top: 10vh;
    justify-content: center;
    align-items: center;
    border: 4px solid black;


div{
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: #87CEFA;
    gap: 15px;
}

input{
    margin-top: 20px;
    border: 1px solid #000;
    height: 15%;
    width: 70%;
    border-radius: 25px;
    
}
button{
    border: 1px solid black;
    border-radius: 25px;
    width: 50%;
    height: 10%;
}
`




const AddTarefa = () => {


    

    const [inputAdicionarTarefa, setInputAdicionarTarefa] = useState("");
    const [message, setMessage] = useState("");


    const adicionarTarefa = async (e) => {
        e.preventDefault()
        try{
            if (inputAdicionarTarefa == "") {
                setMessage("Adicione um nome a tarefa");
                
            }
            else{
                
                const novaTarefa = {
                    nome: inputAdicionarTarefa
                }
                await axios.post('http://localhost:3000/adicionar', novaTarefa)
                    .then(response => {
                        setMessage(response.data.message);
                        
                    })
                
                
            }
            
        }catch (error){
            console.log("Erro ao enviar dados", error);
        }
        setInputAdicionarTarefa("");
    };

    const excluirTarefa = async (event) => {
        event.preventDefault();

        try {
            const tarefa = {
                nome: inputAdicionarTarefa
            };
            

            if (tarefa == ""){
                setMessage("Coloque o nome da tarefa que deseja excluir");
            }else{
                setMessage("");
                await axios.post('http://localhost:3000/excluir', tarefa)
                    .then(response => {
                        setMessage(response.data.message);
                        
                    });
                    
            }
        }
        catch(error){
            console.log("Error ao enviar dados", error);
        }
        setInputAdicionarTarefa("");
    }

    return(
        <SectionForm>
            <AddForm onSubmit={adicionarTarefa}>
                <div>
                    <input type="text" placeholder="Digite o nome da tarefa a ser adicionada" value={inputAdicionarTarefa} onChange={(e) => setInputAdicionarTarefa(e.target.value)}/>
                    <button type="submit">Adicionar Tarefa</button>
                    <button type="button" onClick={excluirTarefa}>Excluir tarefa</button>
                    <p>{message}</p>
                </div>
            </AddForm>
        </SectionForm>
        


    );
}

export default AddTarefa