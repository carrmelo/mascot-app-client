import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

import { Pet } from '../models/pet.model'

@Component({
  selector: 'newPet',
  templateUrl: './new-pet.component.html',
  styleUrls: ['./new-pet.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NewPetComponent implements OnInit {

  // @Input() pet: Pet;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }
  
  species = ['Perro', 'Gato'];

  sizes = ['Mini', 'Pequeño', 'Mediano', 'Grande', 'Extra Grande'];

  pet = new Pet()
  // submitted = false;

  // onSubmit() { this.submitted = true; }

  addPet() {  
    this.pet.organization = event.path.filter(o => o === document)[0].URL.split('/')[4]
    this.http.post('http://localhost:3000/pets', this.pet)
      .subscribe(res => {
        console.log('RES', res)
        let id = res['_id'];
        console.log(id);
        
        this.router.navigate(['/pets', id]);
      }, (err) => console.error(err));
  }

}
