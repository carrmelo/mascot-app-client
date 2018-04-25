import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AlertModule } from 'ngx-bootstrap/alert';

import { AppComponent } from './app.component';
import { simpleReducer } from './reducers/simple.reducer';
import { postReducer } from './reducers/post.reducer';
import { UserComponent } from './user/user.component';
import { PetComponent } from './pet/pet.component';
import { PetService } from './pet.service';
import { AppRoutingModule } from './/app-routing.module';
import { OrgsComponent } from './orgs/orgs.component';
import { NewPetComponent } from './new-pet/new-pet.component';
import { OrgDetailComponent } from './org-detail/org-detail.component';
import { UserDetailComponent } from './user-detail/user-detail.component'

import { Cloudinary as CloudinaryCore } from 'cloudinary-core';
import { CloudinaryConfiguration, CloudinaryModule } from '@cloudinary/angular-5.x';
import { Cloudinary } from '@cloudinary/angular-5.x/src/cloudinary.service';

export const cloudinary = {
  Cloudinary: CloudinaryCore
};

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PetComponent,
    OrgsComponent,
    NewPetComponent,
    OrgDetailComponent,
    UserDetailComponent
  ],
  imports: [
    AlertModule.forRoot(),
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({ 
      post: postReducer,
      message: simpleReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    }),
    AppRoutingModule,
    CloudinaryModule.forRoot(Cloudinary,
      { cloud_name: 'carrmelo', upload_preset: 'mypreset' }),
    HttpClientModule
  ],
  providers: [PetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
