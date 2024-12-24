import Styled from 'styled-components';
import {useState} from 'react';




const Input = Styled.input `
    border: 1px solid #000;
    border-radius: 10px;
    height: 20px;
    width: 15vw;
`

const Form = Styled.form `
    display: flex;
    justify-content: center;
    margin-top: 25vh;

button {
    color: #2E8B57;

}
`

const Pesquisa = () => {

    const [pesquisa, setPesquisa] = useState("");
    

    
    const pesquisar = () => {
        e.preventDefault();

    }

    return(
        <section>
            <Form onSubmit={pesquisar}>
                <Input type="text" placeholder="Pesquise a tarefa..." value={pesquisa} onChange={(e) => setPesquisa(e.target.value)}></Input>
                <button type="submit">Pesquisar</button>
            </Form>
        </section>
        
    );
}



export default Pesquisa