import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { interval } from 'rxjs';
import { IStock } from '../shared/stock.interface';
@Component({
  selector: 'app-price-quoter',
  templateUrl: './price-quoter.component.html',
  styleUrls: ['./price-quoter.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class PriceQuoterComponent implements OnInit {
  stockSymbol: string = 'IBM';
  lastPrice: number;
  @Output() buy: EventEmitter<IStock> = new EventEmitter();
  constructor() {
    interval(2000).subscribe(data => {
      this.lastPrice = 100 * Math.random();
    })
  }

  ngOnInit(): void {
  }

  buyStocks(): void {
    console.log('buy button clicked!')
    let stockToBuy: IStock = {
      stockSymbol: this.stockSymbol,
      bidPrice: this.lastPrice
    }
    this.buy.emit(stockToBuy);
  }

}
