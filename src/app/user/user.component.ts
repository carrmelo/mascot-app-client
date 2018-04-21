import { Component, OnInit } from '@angular/core';

import { PetService } from '../pet.service';
import { Pet } from '../models/pet';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  pets: Pet[]; 
  
  constructor(private petService: PetService) { }
  
  ngOnInit() {
    this.getPets();
  }

  getPets(): void {
    this.petService.getPets()
      .subscribe(pets => this.pets = pets);
  }
}
