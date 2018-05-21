import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';

import { Pet } from '../models/pet.model'
import { log } from 'util';

@Component({
  selector: 'newPet',
  templateUrl: './new-pet.component.html',
  styleUrls: ['./new-pet.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NewPetComponent implements OnInit {

  orgId: string;

  private handleAngularJsonBug (error: HttpErrorResponse) {
		const JsonParseError = 'Http failure during parsing for';
		const matches = error.message.match(new RegExp(JsonParseError, 'ig'));
		if (error.status === 200 && matches.length === 1) {
			// return obs that completes;
			return Observable.empty();
		} else {
			return Observable.throw(error);		// re-throw
		}
  }
  
  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.orgId = params['_id']
    });
  }
  
  species = ['Perro', 'Gato'];

  sizes = ['Mini', 'Pequeño', 'Mediano', 'Grande', 'Extra Grande'];

  pet = new Pet()

  addPet() {    
    this.pet.organization = this.orgId
    this.http.post('http://localhost:3000/pets', this.pet)
      .subscribe(res => {
        let id = res['_id'];
        this.router.navigate(['/pets', id]);
      }, (error: HttpErrorResponse) => this.handleAngularJsonBug(error));
  }

}
