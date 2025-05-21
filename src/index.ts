// Importar a biblioteca Express
import express, { Request, Response} from "express";

// Importar a biblioteca variáveis de ambiente
import dotenv from "dotenv";

// Carregar variáveis do arquivo .env
dotenv.config();

// Criar a aplicação Express
const app = express();

// Incluir as CONTROLLERS
import AuthController from "./controllers/AuthController";
import SituationsController from "./controllers/situationsController";

app.use(express.json());
// Criar as rotas
app.use('/', AuthController);
app.use('/', SituationsController);

//app.use(express.json());

const PORT = process.env.PORT;

// Iniciar o servidor na porta 8080
app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta: ${PORT} -  endereço url: http://localhost:5000`);  
});