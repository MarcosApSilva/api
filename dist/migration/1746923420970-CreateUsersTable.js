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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUsersTable1746923420970 = void 0;
const typeorm_1 = require("typeorm");
class CreateUsersTable1746923420970 {
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            // Criar a tabela users
            yield queryRunner.createTable(new typeorm_1.Table({
                name: "users",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment"
                    },
                    {
                        name: "name",
                        type: "varchar",
                    },
                    {
                        name: "email",
                        type: "varchar",
                        isUnique: true,
                    },
                    {
                        name: "password",
                        type: "varchar",
                    },
                    {
                        name: "situationId",
                        type: "int",
                    },
                    {
                        name: "createdAt",
                        type: "timestamp",
                        default: "CURRENT_TIMESTAMP"
                    },
                    {
                        name: "updatedAt",
                        type: "timestamp",
                        default: "CURRENT_TIMESTAMP",
                        onUpdate: "CURRENT_TIMESTAMP"
                    },
                ]
            }));
            // Criar a Chave Estrangeira
            yield queryRunner.createForeignKey("users", new typeorm_1.TableForeignKey({
                columnNames: ["situationId"],
                referencedTableName: "situations",
                referencedColumnNames: ["id"],
                onDelete: "CASCADE",
            }));
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            const table = yield queryRunner.getTable("users");
            const foreignKey = table === null || table === void 0 ? void 0 : table.foreignKeys.find((fk) => fk.columnNames.includes("situationId"));
            if (foreignKey) {
                yield queryRunner.dropForeignKey("users", foreignKey);
            }
            yield queryRunner.dropTable("users");
        });
    }
}
exports.CreateUsersTable1746923420970 = CreateUsersTable1746923420970;
