import { Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { User } from "./user";

@Entity("situations")

export class Situation {
    @PrimaryGeneratedColumn('increment')
    id!: number;

    @Column()
    nameSituation!: string;

    @Column({type: "timestamp", default:() => "CURRENT_TIMESTAMP"})
    createdAt!: Date;

    @Column({type: "timestamp", default:() => "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP"})
    updatedAt!: Date;

    @OneToMany(() => User, (user) => user.situation)
    users!: User[];

}