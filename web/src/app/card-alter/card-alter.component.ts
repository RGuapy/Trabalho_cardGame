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


  constructor(
    private cardSrv: CardService,
    private router: Router,
    private active: ActivatedRoute
  ) { }

  ngOnInit() {
    this.model.card_name = "teste"

    
    this.active.params.subscribe((p) =>{
      console.log(p['id'])
      if(p['id'] ){
        this.getId(p['id'])
      }
    }
   );
    console.log('entrei')
  }

  async getId(id: string): Promise<void> {
    if (id === 'new') { return; }
    const result = await this.cardSrv.GetById(id);
    this.model = result.data as CardModel;
  }

  async save(): Promise<void> {
    const result = await this.cardSrv.post(this.model);
    if (result.sucesso) {
      this.router.navigateByUrl('/deck');
    }
  }


  updateCardName(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.model.card_name = inputElement.value;
  }


}
