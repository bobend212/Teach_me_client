import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Card } from 'src/app/models/Card';
import { Deck } from 'src/app/models/Deck';
import { DecksService } from 'src/app/services/decks.service';

@Component({
  selector: 'app-deck-details',
  templateUrl: './deck-details.component.html',
  styleUrls: ['./deck-details.component.css'],
})
export class DeckDetailsComponent implements OnInit {
  displayedColumns: string[] = ['dateCreated', 'status', 'front', 'details'];

  deck: Deck | undefined;
  deckCards: Card[] = [];
  resultsLength = 0;

  constructor(
    private deckService: DecksService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadDeck();
  }

  loadDeck() {
    this.deckService
      .getSingleDeck(+this.route.snapshot.params['deckId'])
      .subscribe({
        next: (deck) => {
          this.deck = deck,
          this.deckCards = deck.cards,
          this.resultsLength = deck.cards.length
        },
        error: (e) => console.error(e),
      });
  }
}
