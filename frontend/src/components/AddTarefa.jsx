import {useState} from 'react';
import axios from 'axios'

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
                setMessage("");
                
                const novaTarefa = {
                    nome: inputAdicionarTarefa
                }
                const response = await axios.post('http://localhost:3000/adicionar', novaTarefa);
                console.log(response);
                alert("tarefa adcionada")
            }
            
        }catch (error){
            console.log("Erro ao enviar dados", error);
        }
    };

    const excluirTarefa = (e) => {
        e.preventDefault();

        try {
            const tarefa = {
                nome: inputAdicionarTarefa
            };
            

            if (tarefa == ""){
                setMessage("Coloque o nome da tarefa que deseja excluir");
            }else{
                setMessage("");
                axios.post('http://localhost:3000/excluir', tarefa);
                alert("Tarefa excluida");
            }
        }
        catch(error){
            console.log("Error ao enviar dados", error);
        }
    }

    return(
        <section>
            <form onSubmit={adicionarTarefa}>
                <input type="text" placeholder="Digite o nome da tarefa a ser adicionada" onChange={(e) => setInputAdicionarTarefa(e.target.value)}></input>
                <button type="submit">Adicionar Tarefa</button>
                <button onClick={excluirTarefa}>Excluir tarefa</button>
            </form>
            <p>{message}</p>
        </section>


    );
}

export default AddTarefa