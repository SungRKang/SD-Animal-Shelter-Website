// app.routes.ts

import { RouterModule, Routes } from '@angular/router';
import { DogsComponent } from './dogs/dog.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdotablePetsComponent } from './adotable-pets/adotable-pets.component';
import { SurrenderingPetComponent } from './surrendering-pet/surrendering-pet.component';
import { UpcomingEventsComponent } from './upcoming-events/upcoming-events.component';
import { NgModule } from '@angular/core';
import { OtherRescuesComponent } from './other-rescues/other-rescues.component';
import { ResourcesComponent } from './resources/resources.component';


export const routes: Routes = [
  { path: 'dogs', component: DogsComponent },
  { path: '', component: HomeComponent},
  { path: 'about', component: AboutUsComponent},
  { path: 'adoptable-pets', component: AdotablePetsComponent},
  { path: 'surrendering-pet', component: SurrenderingPetComponent},
  { path: 'upcoming-events', component: UpcomingEventsComponent},
  { path: 'other-rescues', component: OtherRescuesComponent},
  { path: 'resources', component: ResourcesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
