import { CardModel } from "src/model/CardModel";
import { BaseService } from "./BaseService";
import { IResultHttp } from "src/interface/IResultHttp";
import { HttpService } from "./HttpService";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // or specify a different provider scope if needed
})


export class CardService extends BaseService<CardModel>{
    constructor(public override http:HttpService){
        super('cards',http)
    }
}