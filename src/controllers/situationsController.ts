// Importar a biblioteca Express
import express, { Request, Response} from "express";
import { AppDataSource } from "../data-source";
// Importar a entidade
import { Situation } from "../entity/situation";


// Criar a aplicação Express
const router = express.Router();


router.get("/situations", async (req: Request, res: Response) => {
    try{
        const situationRepository = AppDataSource.getRepository(Situation);
        const situations = await situationRepository.find();
        res.status(200).json(situations);
        return;
    }catch(error){
        // Retornar erro em caso de falha
        console.log(error);
        res.status(500).json({
            message: "Erro ao listar situação!",
        });
        return;
    }
})


router.get("/situations/:id", async (req: Request, res: Response) => {
    try{

        const {id} = req.params;
        const situationRepository = AppDataSource.getRepository(Situation);
        const situations = await situationRepository.findOneBy({id: parseInt(id)});

        if(!situations){
            res.status(404).json({
                message: "Situação não encontrada!"
            });
            return;
        }

        res.status(200).json(situations);
        return;

    }catch(error){
        // Retornar erro em caso de falha
        console.log(error);
        res.status(500).json({
            message: "Erro ao Visualizar situação!",
        });
        return;
    }
})


// Criar a rota GET principal
router.post("/situations", async (req: Request, res: Response) => {
   
    try{
        var data = req.body;

        // Criar uma instância do repositório de Situation
        const situationRepository = AppDataSource.getRepository(Situation)

        // Criar um novo registro de situação (dados simulados)
        const newSituation = situationRepository.create(data);

        // Salvar o registro no banco de dados
        await situationRepository.save(newSituation);

        // Retornar resposta de sucesso
        res.status(201).json({
            message: "Situação cadastrada com sucesso!",
            situation: newSituation,
        });
    }catch(error){
        // Retornar erro em caso de falha
        console.log(error);
        res.status(500).json({
            message: "Erro ao cadastrar situação!",
        });
    }
});


router.put("/situations/:id", async (req: Request, res: Response) => {
    try{

        const {id} = req.params;
        const data = req.body;
        const situationRepository = AppDataSource.getRepository(Situation);
        const situations = await situationRepository.findOneBy({id: parseInt(id)});

        if(!situations){
            res.status(404).json({
                message: "Situação não encontrada!"
            });
            return;
        }

        situationRepository.merge(situations, data);

        const updateSituation = await situationRepository.save(situations);

        res.status(200).json({
        message: "Atualização realizada com sucesso!",
        situation: updateSituation
        });        
        return;

    }catch(error){
        // Retornar erro em caso de falha
        console.log(error);
        res.status(500).json({
            message: "Erro ao Editar situação!",
        });
        return;
    }
})


// Exportar a instrução que está dentro da constante router 
export default router;    