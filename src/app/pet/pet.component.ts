import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { PetService } from '../pet.service';
import { Pet } from '../models/pet'

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {

  @Input() pet: Pet;

  constructor(
    private route: ActivatedRoute,
    private petService: PetService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getPet();
  }

  getPet(): void {
    const id = this.route.snapshot.paramMap.get('_id');    
    this.petService.getPet(id)
      .subscribe(pet => this.pet = pet);
  }

  goBack(): void {
    this.location.back();
  }

}
