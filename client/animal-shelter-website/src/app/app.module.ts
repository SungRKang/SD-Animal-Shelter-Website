import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpBackend } from '@angular/common/http';
import { DogsModule } from './dogs/dogs.module'; // Adjust the path as necessary
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { DogService } from './dogs/dog.service'; // Adjust the path as necessary

import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { AppRoutingModule } from './app.routes';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { SponsorListComponent } from './sponsors/sponsor-list/sponsor-list.component';
import { SponsorDetailComponent } from './sponsors/sponsor-detail/sponsor-detail.component';

@NgModule({
  declarations: [
    // Don't declare DogsComponent here since it's declared in DogsModule
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    
  ],
  providers: [DogService],
})
export class AppModule { }
