import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';
import { Cloudinary } from '@cloudinary/angular-5.x';

import { Pet } from '../models/pet.model'
import { Param } from 'cloudinary-core';

@Component({
  selector: 'newPet',
  templateUrl: './new-pet.component.html',
  styleUrls: ['./new-pet.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NewPetComponent implements OnInit {

  // @Input() pet: Pet;
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
    private router: Router
  ) { }

  ngOnInit() {
  }
  
  species = ['Perro', 'Gato'];

  sizes = ['Mini', 'Pequeño', 'Mediano', 'Grande', 'Extra Grande'];

  pet = new Pet()

  addPet() {
    this.pet.organization = event.path.filter(o => o === document)[0].URL.split('/')[4]
    this.http.post('http://localhost:3000/pets', this.pet)
      .subscribe(res => {
        console.log('RES', res)
        let id = res['_id'];
        console.log(id);
        
        this.router.navigate(['/pets', id]);
      }, (error: HttpErrorResponse) => this.handleAngularJsonBug(error));
  }

}
