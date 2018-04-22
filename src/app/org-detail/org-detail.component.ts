import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { PetService } from '../pet.service';
import { Org } from '../models/org.model'

@Component({
  selector: 'app-org-detail',
  templateUrl: './org-detail.component.html',
  styleUrls: ['./org-detail.component.css']
})
export class OrgDetailComponent implements OnInit {

  @Input() org: Org;

  constructor(
    private route: ActivatedRoute,
    private petService: PetService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getOrg()
  }

  getOrg(): void {
    const id = this.route.snapshot.paramMap.get('_id');
    this.petService.getOrg(id)
      .subscribe(org => this.org = org);
  }

  goBack(): void {
    this.location.back()
  }

  addPet(): void {
    
  }

}
