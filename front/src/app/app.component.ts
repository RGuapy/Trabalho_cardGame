import { Component,OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import data from '../assets/data.json';
import { HttpService } from 'src/service/HttpService';
import { CardService } from "../service/CardService";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// implements OnInit
export class AppComponent implements OnInit {
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
