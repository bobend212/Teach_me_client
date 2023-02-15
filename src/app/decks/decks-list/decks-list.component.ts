import { Component, OnInit } from '@angular/core';
import { DecksService } from 'src/app/services/decks.service';

@Component({
  selector: 'app-decks-list',
  templateUrl: './decks-list.component.html',
  styleUrls: ['./decks-list.component.css'],
})
export class DecksListComponent implements OnInit {
  decks: any[] | undefined;

  constructor(private decksService: DecksService) {}

  ngOnInit(): void {
    this.decksService.getAllDecks().subscribe((data) => {
      this.decks = data;
    });
  }
}
