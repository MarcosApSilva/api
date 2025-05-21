"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importar a biblioteca Express
const express_1 = __importDefault(require("express"));
const data_source_1 = require("../data-source");
// Criar a aplicação Express
const router = express_1.default.Router();
data_source_1.AppDataSource.initialize()
    .then(() => {
    console.log("Conexão com banco de dados realizada com sucesso!");
})
    .catch((error) => {
    console.log("Erro na conexão com banco de dados: ", error);
});
// Criar a rota GET principal
router.get("/", (req, res) => {
    res.send("Bem-vindo Celke!");
});
// Exportar a instrução que está dentro da constante router 
exports.default = router;
