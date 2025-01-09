import Search from './components/SearchBar';
import Tarefas from './components/Tarefas';
import AddTarefa from './components/AddTarefa';
import ExcluirTarefa from "./components/ExcluirTarefa";
import Styled from "styled-components";

function App() {

  const SectionForm = Styled.section`
    display: flex;
    background-color: #87CEFA;
    width: 30vw;
    height: 30vh;
    flex-direction: column;
    text-align: center;
    border: 5px solid black;
    

  input{
    width: 10vw;
  }
  button{
    width: 10vw;
  
  }
  `
  const FormContainer = Styled.section`

      display: flex;
      justify-content: center;
  `


  return (
    <>
      <Search />
      <FormContainer>
      <SectionForm>
      <AddTarefa />
      <ExcluirTarefa />
      </SectionForm>
      </FormContainer>
      <Tarefas />
    </>
  );
}

export default App
