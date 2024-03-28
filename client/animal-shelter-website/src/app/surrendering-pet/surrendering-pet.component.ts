import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-surrendering-pet',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './surrendering-pet.component.html',
  styleUrl: './surrendering-pet.component.css'
})

export class SurrenderingPetComponent {
  surrenderForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.surrenderForm = this.fb.group({
      petName: ['', Validators.required],
      petAge: ['', Validators.required],
      petBreed: ['', Validators.required],
      reason: ['', Validators.required],
      ownerName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      issues: [''],
      additionalComments: ['']
    });
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.surrenderForm.valid) {
      this.http.post('http://localhost:1337/api/surrender', this.surrenderForm.value).subscribe(
        response => console.log('Success!', response),
        error => console.error('Error!', error)
      );
    }
  }
}
