"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importar a biblioteca Express
const express_1 = __importDefault(require("express"));
const data_source_1 = require("../data-source");
// Importar a entidade
const situation_1 = require("../entity/situation");
// Criar a aplicação Express
const router = express_1.default.Router();
router.get("/situations", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const situationRepository = data_source_1.AppDataSource.getRepository(situation_1.Situation);
        const situations = yield situationRepository.find();
        res.status(200).json(situations);
        return;
    }
    catch (error) {
        // Retornar erro em caso de falha
        console.log(error);
        res.status(500).json({
            message: "Erro ao listar situação!",
        });
        return;
    }
}));
router.get("/situations/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const situationRepository = data_source_1.AppDataSource.getRepository(situation_1.Situation);
        const situations = yield situationRepository.findOneBy({ id: parseInt(id) });
        if (!situations) {
            res.status(404).json({
                message: "Situação não encontrada!"
            });
            return;
        }
        res.status(200).json(situations);
        return;
    }
    catch (error) {
        // Retornar erro em caso de falha
        console.log(error);
        res.status(500).json({
            message: "Erro ao Visualizar situação!",
        });
        return;
    }
}));
// Criar a rota GET principal
router.post("/situations", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        var data = req.body;
        // Criar uma instância do repositório de Situation
        const situationRepository = data_source_1.AppDataSource.getRepository(situation_1.Situation);
        // Criar um novo registro de situação (dados simulados)
        const newSituation = situationRepository.create(data);
        // Salvar o registro no banco de dados
        yield situationRepository.save(newSituation);
        // Retornar resposta de sucesso
        res.status(201).json({
            message: "Situação cadastrada com sucesso!",
            situation: newSituation,
        });
    }
    catch (error) {
        // Retornar erro em caso de falha
        console.log(error);
        res.status(500).json({
            message: "Erro ao cadastrar situação!",
        });
    }
}));
router.put("/situations/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = req.body;
        const situationRepository = data_source_1.AppDataSource.getRepository(situation_1.Situation);
        const situations = yield situationRepository.findOneBy({ id: parseInt(id) });
        if (!situations) {
            res.status(404).json({
                message: "Situação não encontrada!"
            });
            return;
        }
        situationRepository.merge(situations, data);
        const updateSituation = yield situationRepository.save(situations);
        res.status(200).json({
            message: "Atualização realizada com sucesso!",
            situation: updateSituation
        });
        return;
    }
    catch (error) {
        // Retornar erro em caso de falha
        console.log(error);
        res.status(500).json({
            message: "Erro ao Editar situação!",
        });
        return;
    }
}));
// Exportar a instrução que está dentro da constante router 
exports.default = router;
