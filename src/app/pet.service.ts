import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
// import { of } from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

import { Pet } from './models/pet.model';
import { User } from './models/user.model';
import { Org } from './models/org.model';

// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type':  'application/json',
//   })
// };

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

  // private handleError(error: HttpErrorResponse) {
  //   if (error.error instanceof ErrorEvent) {
  //     // A client-side or network error occurred. Handle it accordingly.
  //     console.error('An error occurred:', error.error.message);
  //   } else {
  //     // The backend returned an unsuccessful response code.
  //     // The response body may contain clues as to what went wrong,
  //     console.error(
  //       `Backend returned code ${error.status}, ` +
  //       `body was: ${error.error}`);
  //   }
  //   // return an ErrorObservable with a user-facing error message
  //   return new ErrorObservable(
  //     'Something bad happened; please try again later.');
  // };

  adoptionRequest(org: String, pet: String, user: String): Observable<Org> {
    const url = `${this.petUrl}/orgs/${org}`;
    const adoptionReq = { org, pet, user };
    return this.http.put<Org>(url, adoptionReq);
      // .pipe(
      //   catchError(this.handleError('a', org, {observe: 'response'}))
      // )
  }

  acceptAdoption(org: String, pet: String, user: String): Observable<User> {
    const url = `${this.petUrl}/users/${user}`;
    const approvalRes = { org, pet, user };
    return this.http.put<User>(url, approvalRes);
  }
}
