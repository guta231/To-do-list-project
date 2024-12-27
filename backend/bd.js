const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const PORT = 3000;


let listaDeTarefas = [{nome: "Dormir", status: "Pendente"}, {nome: "Estudar", status: "Em andamento"}];

app.get('/tarefas', (req, res) => {
    res.json(listaDeTarefas);
});

app.post('/adicionar', (req, res) => {

    const nomeDaTarefa = req.body.nome;

    listaDeTarefas.push({nome: nomeDaTarefa, status: "Pendente"});

    res.json({message: "Tarefa Adicionada"});
});

app.post('/excluir', (req, res) => {

    const nomeDaTarefa = req.body.nome;

    let tamanhoInicial = listaDeTarefas.length;

    listaDeTarefas = listaDeTarefas.filter((tarefa) => tarefa.nome !== nomeDaTarefa);

    if (listaDeTarefas.length == tamanhoInicial){
        res.json({message: "Tarefa não encontrada"});
    }else{
        res.json({message: "Tarefa excluida com sucesso"});
    }

    }
);

app.post('/alterar', (req, res) => {

    const index = req.body.nome;


    for (i = 0; i < listaDeTarefas.length; i++){
        if (listaDeTarefas[i].nome == index){
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
    return res.json({message: "Erro detectado"});
});


app.listen(PORT, () => {
    console.log("servidor backend iniciado");

});