// mensagem de retorno
// método para dizer se é válido
// método para retorna a mensagem
// método para validar algo

// nossa classe
// abstrata, pois não pode ser instanciada
export abstract class ControllerBase {

// mensagem de retorno
// declarei array com várias mensagens do tipo string
    notificacoes : Array<{mensagens:string}>

    // instanciei um array
    constructor (){
        this.notificacoes = new Array <{mensagens:string}>()
    }

    // colocar um notificação no arry
    addNotificacao (mensagem: string): void{
        this.notificacoes.push ({mensagens:mensagem})
    }

    retornaNotificacoes (): Array<{mensagens:string}>{
        return this.notificacoes
    }

    // retorna verdadeiro se não tiver mensagem de erro no array
    valid (): boolean{       
       return this.notificacoes.length == 0; 
    }

    isRequired (value,mensagem){
        if ((!value || value.length <= 0) && value != 0){
            this.notificacoes.push ({mensagens:mensagem})
        }
    }


    fieldValidation (cond,mensagem){
        if (!cond){
            this.notificacoes.push ({mensagens:mensagem})
        }
    }


    

}