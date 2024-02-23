import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpBackend } from '@angular/common/http';
import { DogsModule } from './dogs/dogs.module'; // Adjust the path as necessary
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { DogService } from './dogs/dog.service'; // Adjust the path as necessary

import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent
    // Don't declare DogsComponent here since it's declared in DogsModule
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  providers: [DogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
