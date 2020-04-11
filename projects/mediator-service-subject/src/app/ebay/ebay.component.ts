import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StateService } from '../shared/state.service';

@Component({
  selector: 'app-ebay',
  templateUrl: './ebay.component.html',
  styleUrls: ['./ebay.component.scss']
})
export class EbayComponent implements OnInit {
  searchFor: Observable<string>;
  constructor(private state: StateService) {
    this.searchFor = state.getState()
  }

  ngOnInit(): void {
  }

}
