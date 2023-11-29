import { ICard } from "src/interface/ICard";
import { BaseService } from "./BaseService";
import { IResultHttp } from "src/interface/IResultHttp";
import { HttpService } from "./HttpService";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // or specify a different provider scope if needed
})


export class CardService extends BaseService<ICard>{
    constructor(public override http:HttpService){
        super('cards',http)
    }
}