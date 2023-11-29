import { Component,Input } from '@angular/core';
import { CardService } from "src/service/CardService";
import data from 'src/assets/data.json';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css']
})
export class DeckComponent {
  constructor(private cardService: CardService) {}


  cards:any

  ngOnInit() {
    this.cards = data.cards
    this.getAllCards()

    
    

  }

  async getAllCards(){
    let backInfo = await this.cardService.GetAll()

    this.cards = backInfo.data
    console.log(this.cards)
   

  }

}
