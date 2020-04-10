import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-order-processor',
  templateUrl: './order-processor.component.html',
  styleUrls: ['./order-processor.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class OrderProcessorComponent implements OnInit {
  private _stockSymbol: string;
  // @Input() stockSymbol: string;
  @Input() quantity: number;

  @Input() set stockSymbol(value: string) {
    this._stockSymbol = value;
    if(!!value) {
      this._stockSymbol = value;
      console.log(`Buying ${this.quantity} shared of ${value}`);
    }
  }
  get stockSymbol() {
    return this._stockSymbol;
  }
  constructor() {}

  ngOnInit(): void {}
}
