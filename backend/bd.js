const express = require('express');
const cors = require('cors');
const rotas = require("./rotas/rotas");

const app = express();

app.use(express.json());
app.use(cors());

const PORT = 3000;


app.use("/", rotas);


app.listen(PORT, () => {
    console.log("servidor backend iniciado");

});
