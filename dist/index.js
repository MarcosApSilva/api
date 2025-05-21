"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importar a biblioteca Express
const express_1 = __importDefault(require("express"));
// Importar a biblioteca variáveis de ambiente
const dotenv_1 = __importDefault(require("dotenv"));
// Carregar variáveis do arquivo .env
dotenv_1.default.config();
// Criar a aplicação Express
const app = (0, express_1.default)();
// Incluir as CONTROLLERS
const AuthController_1 = __importDefault(require("./controllers/AuthController"));
const situationsController_1 = __importDefault(require("./controllers/situationsController"));
app.use(express_1.default.json());
// Criar as rotas
app.use('/', AuthController_1.default);
app.use('/', situationsController_1.default);
//app.use(express.json());
const PORT = process.env.PORT;
// Iniciar o servidor na porta 8080
app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta: ${PORT} -  endereço url: http://localhost:5000`);
});
