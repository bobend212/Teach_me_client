import { Component, Input, OnInit } from '@angular/core';
import { Deck } from 'src/app/models/Deck';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css'],
})
export class DeckComponent implements OnInit {
  @Input() deck: Deck | undefined;

  constructor() {}

  ngOnInit(): void {}
}
