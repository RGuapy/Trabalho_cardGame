import { Component, OnInit } from '@angular/core';
import { CardService } from "src/service/CardService";
import { CardModel } from 'src/model/CardModel';
import { Router, ActivatedRoute } from '@angular/router';
import { ICard } from 'src/interface/ICard';

@Component({
  selector: 'app-card-alter',
  templateUrl: './card-alter.component.html',
  styleUrls: ['./card-alter.component.css']
})
export class CardAlterComponent implements OnInit{

  model: CardModel = new ICard();

  constructor(
    private cardSrv: CardService,
    private router: Router,
    private active: ActivatedRoute
  ) { }

  ngOnInit() {
    this.active.params.subscribe(p => this.getId(p['id']));
  }

  async getId(id: string): Promise<void> {
    if (id === 'new') { return; }
    const result = await this.cardSrv.GetById(id);
    this.model = result.data as CardModel;
  }

  async save(): Promise<void> {
    const result = await this.cardSrv.post(this.model);
    if (result.sucesso) {
      this.router.navigateByUrl('/');
    }
  }
}
