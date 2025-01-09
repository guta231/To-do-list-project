import {useState} from "react";
import axios from "axios";


const ExcluirTarefa = () => {


    const [inputExcluirTarefa, setInputExcluirTarefa] = useState("");
    const [message, setMessage] = useState("")

    const excluirTarefa = async (e) => {
        e.preventDefault()

        try{
            let tarefa = {
                id:inputExcluirTarefa
            }
            
          await axios.delete("http://localhost:3000/", {data:tarefa})
            .then(response => {
                setMessage(response.data.message);
            })
            
        }catch(error){
            console.log(error);
        }
    }


    return(
        <section>
            <form onSubmit={excluirTarefa}>
                <p>Excluir Tarefa</p>
                <input type="text" placeholder="id da tarefa" onChange={(e) => setInputExcluirTarefa(e.target.value)}></input>
                <button type="submit">Excluir</button>
                <p>{message}</p>
            </form>
        </section>

    )
}

export default ExcluirTarefa