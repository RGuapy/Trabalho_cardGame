import { Component, OnInit } from '@angular/core';
import { CardService } from "src/service/CardService";
import { ICard } from 'src/interface/ICard';
import { Router, ActivatedRoute } from '@angular/router';
import { CardModel } from 'src/model/CardModel';


@Component({
  selector: 'app-card-alter',
  templateUrl: './card-alter.component.html',
  styleUrls: ['./card-alter.component.css']
})

export class CardAlterComponent implements OnInit{

  model: CardModel = new CardModel();
  buttonTitulo: string = 'Alterar';

  constructor(
    private cardSrv: CardService,
    private router: Router,
    private active: ActivatedRoute
  ) { }

  ngOnInit() {

    
    this.active.params.subscribe((p) =>{
      if(p['id'] ){
        this.getId(p['id'])
      }
    }
   );
    console.log('entrei')
  }

  async getId(id: string): Promise<void> {
    if (id === 'new') { 
      this.buttonTitulo = 'Criar'
      return; }
    const result = await this.cardSrv.GetById(id);
    this.model = result.data as CardModel;
  }

  async save(): Promise<void> {
    let id = (this.model.id)?.toString()

    const result = await this.cardSrv.post(this.model,id);
    if (result.status == 200) {
      this.router.navigateByUrl('/deck');
    }
  }





}
