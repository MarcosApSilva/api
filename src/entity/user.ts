import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm";
import { Situation } from "./situation";

@Entity("users")
export class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column({ unique: true })
    email!: string;

    //Relacionamento
    @ManyToOne(() => Situation, (situation) => situation.users)
    @JoinColumn({ name: "situationId"})
    situation!: Situation;


    @Column({type: "timestamp", default:() => "CURRENT_TIMESTAMP"})
    createdAt!: Date;

    @Column({type: "timestamp", default:() => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP"})
    updatedAt!: Date;

}