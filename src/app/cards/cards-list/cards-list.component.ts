import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/Card';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.css']
})
export class CardsListComponent implements OnInit {
  cards: Card[] | undefined;

  constructor(private cardsService: CardsService) {}

  ngOnInit(): void {
    this.cardsService.getAllCards().subscribe((data: Card[]) => {
      this.cards = data;
    });
  }

}
