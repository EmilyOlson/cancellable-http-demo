import { Component } from '@angular/core';
import { DataService } from './data.service';
import { FormGroup, FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, map, switchMap, debounce } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public name: string;

  //form setup

  userSearchForm = new FormGroup({
    nameSearch: new FormControl(''),
    selectedSize: new FormControl(''),
    selectedGender: new FormControl(''),
  });

  public nameSearch: string;
  public shirtSizes: string[] = [
    'S',
    'M',
    'L',
    'XL',
    '2XL',
    '3XL',
  ];
  public languages: string[] = [];
  public results: any[];

  constructor(private dataService: DataService) {
    this.name = `Vara`;
    const formSearch = this.userSearchForm.valueChanges.pipe(
      debounceTime(1000),
      distinctUntilChanged((prev, cur) => (prev.nameSearch === cur.nameSearch && prev.selectedSize === cur.selectedSize && prev.selectedGender === cur.selectedGender)),
      switchMap((inputs) => this.dataService.searchPeople(inputs.nameSearch, inputs.selectedSize, inputs.selectedGender))
      );

    formSearch.subscribe(data => this.results = data);
  }
}
