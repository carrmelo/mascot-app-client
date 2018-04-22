import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { catchError, map, tap } from 'rxjs/operators';

import { Pet } from './models/pet.model';
import { Org } from './models/org.model';

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

  getOrgs(): Observable<Org[]> {
    return this.http.get<Org[]>(`${this.petUrl}/orgs`)
  }

  getOrg(id: String): Observable<Org> {
    const url = `${this.petUrl}/orgs/${id}`
    return this.http.get<Org>(url);
  }

  // addPet() 
}
