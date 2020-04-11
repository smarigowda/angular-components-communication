import { Component, OnInit } from '@angular/core';
import { StateService } from '../shared/state.service';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchInput: FormControl;
  constructor(private state: StateService) {
    console.log(state);
    this.searchInput = new FormControl('');
    this.searchInput.valueChanges.pipe(debounceTime(500)).subscribe(value => {
      this.state.searchCriteria = value;
    });
  }

  ngOnInit(): void {
  }

}
