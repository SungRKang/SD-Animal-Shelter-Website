import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogsComponent } from './dog.component';

@NgModule({
  declarations: [DogsComponent],
  imports: [
    CommonModule
    // other imports if necessary
  ],
  exports: [DogsComponent] // Export the component so it can be used outside of this module
})
export class DogsModule { }
