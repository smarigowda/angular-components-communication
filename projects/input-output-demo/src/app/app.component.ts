import { Component, ViewEncapsulation } from '@angular/core';
import { IPriceQuote } from './shared/price.quote.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent {
  readonly numOfShares = 100;
  priceQuote: IPriceQuote;
  stock: string;
  onChangeHandler({ target }) {
    this.stock = target.value;
  }
  handlePriceQuote(data: IPriceQuote) {
    console.log(data);
    this.priceQuote = data;
  }
}
