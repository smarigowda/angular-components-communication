import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-order-processor',
  templateUrl: './order-processor.component.html',
  styleUrls: ['./order-processor.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class OrderProcessorComponent implements OnInit {
  @Input() stockSymbol: string;
  @Input() quantity: number;
  constructor() {}

  ngOnInit(): void {}
}
