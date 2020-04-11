import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnChanges {
  @Input() greeting: string;
  @Input() user: { name: string };
  constructor() { }

  ngOnChanges(changes: { [key: string]: SimpleChange }) {
    console.log(JSON.stringify(changes, null, 2));
  }
}
