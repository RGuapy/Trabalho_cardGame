import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import { EntidadeBase } from "./EntidadeBase";
@Entity()
export class Card extends EntidadeBase{

    @Column()
    card_name: string

    @Column()
    card_type: string

    @Column()
    card_atk: number


    @Column()
    card_life: number

    @Column()
    card_desc: string


}
