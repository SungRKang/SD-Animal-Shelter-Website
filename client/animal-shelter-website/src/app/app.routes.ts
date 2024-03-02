import { RouterModule, Routes } from '@angular/router';
import { DogsComponent } from './dogs/dog.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdoptablePetsComponent } from './adoptable-pets/adoptable-pets.component';
import { SurrenderingPetComponent } from './surrendering-pet/surrendering-pet.component';
import { UpcomingEventsComponent } from './upcoming-events/upcoming-events.component';
import { NgModule } from '@angular/core';
import { OtherRescuesComponent } from './other-rescues/other-rescues.component';
import { ResourcesComponent } from './resources/resources.component';
import { AvailablePetsComponent } from './available-pets/available-pets.component';
import { RecentAdoptionsComponent } from './recent-adoptions/recent-adoptions.component';
import { SponsorsComponent } from './sponsors/sponsors.component';


export const routes: Routes = [
  { path: 'dogs', component: DogsComponent },
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutUsComponent},
  { path: 'adoptable-pets', component: AdoptablePetsComponent},
  { path: 'surrendering-pet', component: SurrenderingPetComponent},
  { path: 'upcoming-events', component: UpcomingEventsComponent},
  { path: 'other-rescues', component: OtherRescuesComponent},
  { path: 'resources', component: ResourcesComponent},
  { path: 'available-pets', component: AvailablePetsComponent},
  { path: 'recent-adoptions', component: RecentAdoptionsComponent},
  { path: 'sponsors', component: SponsorsComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
