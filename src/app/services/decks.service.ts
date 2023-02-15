import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DecksService {
  private url = 'http://localhost:8080/api/v1/decks';

  constructor(private http: HttpClient) {}

  getAllDecks(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }
}
