import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../models/Card';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  private url = 'http://localhost:8080/api/v1/cards';

  constructor(private http: HttpClient) { }

  getAllCards(): Observable<Card[]> {
    return this.http.get<Card[]>(this.url);
  }
}
