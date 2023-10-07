import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import { EntidadeBase } from "./EntidadeBase"

@Entity()
export class Batata extends EntidadeBase{

   
    @Column()
    tipoBatata: string

    @Column()
    corbatata: string
   


}
