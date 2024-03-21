// src/app/dog.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IDog } from './dog.interface'

@Injectable({
  providedIn: 'root'
})
export class DogService {
  private baseUrl = 'http://localhost:1337/api/dogs'; // Replace with the actual URL where the Express server is running

  constructor(private http: HttpClient) { }

  getDogs(): Observable<IDog[]> {
    return this.http.get<IDog[]>(this.baseUrl);
  }
}
