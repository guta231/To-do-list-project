import {useState} from 'react';
import axios from 'axios'


const AddTarefa = () => {


    

    const [inputAdicionarTarefa, setInputAdicionarTarefa] = useState("");
    const [message, setMessage] = useState("");


    const adicionarTarefa = (e) => {
        e.preventDefault()
        try{
            if (inputAdicionarTarefa == "") {
                setMessage("Adicione um nome a tarefa");
                
            }
            else{
                
                const novaTarefa = {
                    nome: inputAdicionarTarefa
                }
                    axios.post('http://localhost:3000/', novaTarefa)
                    .then(response => {
                        setMessage(response.data.message);
                        
                    })
                
                
            }
            
        }catch (error){
            console.log("Erro ao enviar dados", error);
        }
        setInputAdicionarTarefa("");
    };


    return(
        <section>
            <form onSubmit={adicionarTarefa}>
                <p>Adicionar Tarefa</p>
                <input type="text" placeholder="Digite o nome da tarefa a ser adicionada" value={inputAdicionarTarefa} onChange={(e) => setInputAdicionarTarefa(e.target.value)}/>
                <button type="submit">Adicionar Tarefa</button>
                
            </form>
            <p>{message}</p>
        </section>
        


    );
}

export default AddTarefa