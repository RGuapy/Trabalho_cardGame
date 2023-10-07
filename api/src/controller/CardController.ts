import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { Card } from "../entity/Card"
import { ControllerBase } from "./ControllerBase"

export class CardController extends ControllerBase{

    private cardRepository = AppDataSource.getRepository(Card)

    async all(request: Request, response: Response, next: NextFunction) {
       
       
        return this.cardRepository.find()
    }

    async one(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)


        const card = await this.cardRepository.findOne({
            where: { id }
        })

        if (!card) {
            return "unregistered card"
        }
        return card
    }

    async save(request: Request, response: Response, next: NextFunction) {
        const { card_name, card_type, card_atk,card_life,card_desc } = request.body;
       this.isRequired(card_name,"Valor card_name necessário")
       this.isRequired(card_type,"Valor card_type necessário")
       this.isRequired(card_atk,"Valor card_atk necessário")
       this.isRequired(card_life,"Valor card_life necessário")
       this.isRequired(card_desc,"Valor card_desc necessário")
       console.log (this.notificacoes)


       if (!this.valid()){
        return {
            status:400,
            errors: this.notificacoes
        }
        }

        //Validação de campos
        this.fieldValidation((typeof(card_desc) == "string" && card_name.length > 3),"card_name precisa ser string e maior que 3 caracteres")

        let validTypes = ["water","fire","earth","air"]
        this.fieldValidation(validTypes.includes(card_type),"card_type não é um tipo válido (water | fire | earth | air)")
        
        this.fieldValidation((typeof(card_desc) == "number" && card_atk%100 == 0),"card_atk precisa ser 0 ou múltiplo de 100")
        
        this.fieldValidation((typeof(card_desc) == "number" && card_life%100 == 0 && card_life > 0),"card_atk precisa ser maior que 0 e múltiplo de 100")
        
        this.fieldValidation(typeof(card_desc) == "string","card_desc precisa ser uma string")


       if (!this.valid()){
            return {
                status:400,
                errors: this.notificacoes
            }
        }


        const card = Object.assign(new Card(), {
            card_name, card_type, card_atk,card_life,card_desc
        })

        return this.cardRepository.save(card)
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        const id = parseInt(request.params.id)

        let cardToRemove = await this.cardRepository.findOneBy({ id })

        if (!cardToRemove) {
            return "this card not exist"
        }

        await this.cardRepository.remove(cardToRemove)

        return "card has been removed"
    }

}