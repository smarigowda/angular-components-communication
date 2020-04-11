import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StateService } from '../shared/state.service';

@Component({
  selector: 'app-amazon',
  templateUrl: './amazon.component.html',
  styleUrls: ['./amazon.component.scss']
})
export class AmazonComponent implements OnInit {
  searchFor: Observable<string>;
  constructor(private state: StateService) {
    this.searchFor = state.getState();
   }

  ngOnInit(): void {
  }

}
