// Importar a biblioteca Express
import express, { Request, Response} from "express";
import { AppDataSource } from "../data-source";

// Criar a aplicação Express
const router = express.Router();


// Criar a rota GET principal
router.get("/", (req: Request, res: Response) => {
    res.send("Bem-vindo Celke!");
});

// Exportar a instrução que está dentro da constante router 
export default router;    