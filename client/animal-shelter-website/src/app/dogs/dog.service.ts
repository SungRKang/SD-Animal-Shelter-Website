// src/app/dog.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogService {
  private baseUrl = 'http://localhost:1337/api/dogs'; // Replace with the actual URL where the Express server is running

  constructor(private http: HttpClient) { }

  getDogs(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
}
