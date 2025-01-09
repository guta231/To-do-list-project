

let listaDeTarefas = [{id: "1", nome: "Dormir", status: "Pendente"}, {id:"2", nome: "Estudar", status: "Em andamento"}];


const getTarefas = (req, res) => {

    res.json(listaDeTarefas);
}

const addTarefa = (req, res) => {

    try{
        const nomeDaTarefa = req.body.nome;

        const id = listaDeTarefas.length + 1;
        
        listaDeTarefas.push({id: id.toString(), nome: nomeDaTarefa, status: "Pendente"});

        res.json({message: "Tarefa Adicionada"});
    }catch(error){
        res.status(500);
        console.log(error);
    }
    
}
const excluirTarefa = (req, res) => {

    try{
        const idDaTarefa = req.body.id;

        let tamanhoInicial = listaDeTarefas.length;
    
        listaDeTarefas = listaDeTarefas.filter((tarefa) => tarefa.id !== idDaTarefa);
    
        if (listaDeTarefas.length == tamanhoInicial){
            res.json({message: "Tarefa não encontrada"});
        }else{
            res.json({message: "Tarefa excluida com sucesso"});
        }
    }catch(error){
        res.status(500);
        res.json({message:error});
    }
    

}

const alterarTarefa = (req, res) => {

    try{
        const index = req.body.id;


        for (i = 0; i < listaDeTarefas.length; i++){
            if (listaDeTarefas[i].id == index){
                if (listaDeTarefas[i].status == 'Pendente'){
                    listaDeTarefas[i].status = 'Em andamento';
                    return res.json({message: "Tarefa alterada"});
                }else if (listaDeTarefas[i].status == 'Em andamento'){
                    listaDeTarefas[i].status = 'Finalizada';
                    return res.json({message: "Tarefa alterada"});
                }else if (listaDeTarefas[i].status == 'Finalizada'){
                    listaDeTarefas[i].status = 'Pendente';
                    return res.json({message: "Tarefa alterada"});
                }
            }
        }
    }catch(error){
        res.status(500);
        res.json({message:error});
    }
    
}

module.exports = {
    getTarefas,
    addTarefa,
    excluirTarefa,
    alterarTarefa
}