const {Router} = require("express");
const {getTarefas, addTarefa, excluirTarefa, alterarTarefa} = require("../controles/controles");

const router = Router();

router.get("/", getTarefas);

router.post("/", addTarefa);

router.delete("/", excluirTarefa);

router.patch("/", alterarTarefa);

module.exports = router