import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

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

  constructor(private fb: FormBuilder, private http: HttpClient, private snackBar: MatSnackBar) {
    this.surrenderForm = this.fb.group({
      petName: ['', Validators.required],
      petAge: ['', Validators.required],
      petBreed: ['', Validators.required],
      reason: ['', Validators.required],
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
        response => {
          console.log('Success!', response);
          this.surrenderForm.reset();
          this.submitted = false;
          this.showSuccessMessage();
        },
        error => {
          console.error('Error!', error);
          this.showErrorMessage();
        }
      );
    }
  }

  showSuccessMessage(): void {
    this.snackBar.open('Email sent successfully!', 'Close', {
      duration: 5000, // duration the snackbar will show
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }

  showErrorMessage(): void {
    this.snackBar.open('Failed to send email. Try again later.', 'Close', {
      duration: 5000, // duration the snackbar will show
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
      panelClass: ['mat-toolbar', 'mat-warn']
    });
  }
}
