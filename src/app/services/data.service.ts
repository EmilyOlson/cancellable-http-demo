
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) { }

  public searchPeople(
      nameFragment: string = '',
      shirtSize: string = '', 
      gender: string = ''
      ): Observable<person[]> {
        // ignore the pipe, the filtering will be done server side
        return this.http.get('/assets/data.json').pipe(delay(2000), map(
            (data: person[]) => {
                return data.filter((item: person) => {
                    const nameMatch = !nameFragment || ( item.first_name.indexOf(nameFragment) > 0 || item.last_name.indexOf(nameFragment) > 0 );
                    const sizeMatch = !shirtSize || item.shirt_size === shirtSize;
                    const genderMatch = !gender || item.gender === gender;
                    return nameMatch && sizeMatch && genderMatch;
                });
            }));
  }
}

interface person {
    id: number,
    first_name: string,
    last_name: string,
    email: string,
    catc_phrase: string,
    gender: string,
    shirt_size: string,
    language: string
};