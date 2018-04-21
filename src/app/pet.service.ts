import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { catchError, map, tap } from 'rxjs/operators';

import { Pet } from './models/pet';

@Injectable()
export class PetService {
  
  private petUrl = 'http://localhost:3000'
  
  constructor(private http: HttpClient) { }
  
  getPets(): Observable<Pet[]> {
    return this.http.get<Pet[]>(`${this.petUrl}/pets`)
  }

  getPet(id: String): Observable<Pet> {
    const url = `${this.petUrl}/pets/${id}`;
    return this.http.get<Pet>(url);
  }
}
