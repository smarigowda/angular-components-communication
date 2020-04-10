import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { IStock } from '../shared/stock.interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class OrderComponent implements OnInit {
  message = 'Waiting for orders...';
  constructor() { }
  @Input() set stock(value: IStock) {
    if(value && value.bidPrice) {
      this.message = `Placed order to buy 100 shares of ${value.stockSymbol} at ${value.bidPrice.toFixed(2)}`;
    }
  }
  ngOnInit(): void {
  }
}
