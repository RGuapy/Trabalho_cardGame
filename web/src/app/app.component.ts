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



  ngOnInit() {
    console.log('entrei')

  }

  
}
