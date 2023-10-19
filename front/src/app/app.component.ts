import { Component,OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import data from '../assets/data.json';
import { HttpService } from 'src/service/HttpService';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// implements OnInit
export class AppComponent implements OnInit {
  constructor(private http: HttpService) {}


  title = 'aulamock';
  // cards = data.cards

  // REQUEST FROM API
    cards = []

  ngOnInit() {
		// API Call
		
		// this.getCard()
    let backInfo = this.http.get('http://localhost:3000/cards/')
    

    
    console.log(backInfo)


  }

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
