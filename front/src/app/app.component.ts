import { Component,OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import data from '../assets/data.json';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// implements OnInit
export class AppComponent  {
  constructor(private http: HttpClient) {}


  title = 'aulamock';
  cards = data.cards

  //REQUEST FROM API
  // cards = null
  // ngOnInit() {
	// 	// API Call
		
	// 	this.getCard()

  // }

  // getCard(){
  //   this.http
	// 		.get<any>('http://localhost:3000/cards/', {
				
	// 		})
	// 		.subscribe(data => {
	// 			console.log(data)
  //       this.cards = data
	// 		});
  // }


  
}
