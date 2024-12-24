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
});

app.post('/excluir', (req, res) => {

    const nomeDaTarefa = req.body.nome;

    for (let i = listaDeTarefas.lenght - 1; i >= 0; i--){
        if (listaDeTarefas[i].nome == nomeDaTarefa) {
            listaDeTarefas.splice(i, 1);
        }
    }
})

app.listen(PORT, () => {
    console.log("servidor backend iniciado");

});