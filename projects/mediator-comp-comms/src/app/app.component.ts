import { Component, ViewEncapsulation } from '@angular/core';
import { IStock } from './shared/stock.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class AppComponent {
  receivedStock: IStock;
  handleBuy(data: IStock) {
    this.receivedStock = data;
  }
}
