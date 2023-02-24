import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Deck } from '../models/Deck';

@Injectable({
  providedIn: 'root',
})
export class DecksService {
  private url = 'http://localhost:8080/api/v1/decks';

  constructor(private http: HttpClient) {}

  getAllDecks(): Observable<Deck[]> {
    return this.http.get<Deck[]>(this.url);
  }

  getSingleDeck(deckId: number): Observable<Deck> {
    return this.http.get<Deck>(this.url + '/' + deckId);
  }

}
