import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Questao } from "./entity/Questao"
import { Card } from "./entity/Card"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "card_game",
    synchronize: true,
    logging: false,
    entities: [User,Questao,Card],
    migrations: [],
    subscribers: [],
})
