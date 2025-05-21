"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importar a biblioteca Express
const express_1 = __importDefault(require("express"));
// Criar a aplicação Express
const router = express_1.default.Router();
// Criar a rota GET principal
router.get("/situations", (req, res) => {
    res.send("Cadastrar Situation");
});
// Exportar a instrução que está dentro da constante router 
exports.default = router;
