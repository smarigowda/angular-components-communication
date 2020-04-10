import { Component, OnInit, EventEmitter, ViewEncapsulation, Output } from '@angular/core';
import { IPriceQuote } from '../shared/price.quote.interface';
import { interval } from 'rxjs';

@Component({
  selector: 'app-price-quoter',
  templateUrl: './price-quoter.component.html',
  styleUrls: ['./price-quoter.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class PriceQuoterComponent implements OnInit {
  priceQuote: IPriceQuote;
  @Output() lastPrice = new EventEmitter<IPriceQuote>();
  constructor() {
    interval(2000).subscribe((data) => {
      this.priceQuote = {
        stockSymbol: 'IBM',
        lastPrice: 100 * Math.random(),
      };
      this.lastPrice.emit(this.priceQuote);
    });
  }

  ngOnInit(): void { }
}
