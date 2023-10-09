import { Component,Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
  @Input() itemInput: any;

  teste = ""

  ngOnInit(): void{
    if (this.itemInput.card_type === 'earth') {
      this.teste = "https://w7.pngwing.com/pngs/435/530/png-transparent-earth-symbol-classical-element-fire-creative-elements-chemical-element-computer-wallpaper-sphere.png";
    }else if (this.itemInput.card_type === 'air'){

      this.teste = "https://i.pinimg.com/originals/c3/db/33/c3db335aa7c66bcd99df917167e905e8.png";

    }else if (this.itemInput.card_type === 'water'){

      this.teste = "https://spng.pngfind.com/pngs/s/166-1662763_rethink-the-bottle-water-energy-symbol-hd-png.png";

    }else if (this.itemInput.card_type === 'fire'){

      this.teste = "https://talenthero.io/wp-content/uploads/2016/06/Yin-Fire.png";

    }
  }
  


}



