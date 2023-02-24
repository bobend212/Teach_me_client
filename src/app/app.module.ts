import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DecksListComponent } from './decks/decks-list/decks-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { DeckComponent } from './decks/deck/deck.component';
import { DeckDetailsComponent } from './decks/deck-details/deck-details.component';
import { CardsListComponent } from './cards/cards-list/cards-list.component';
import { CardComponent } from './cards/card/card.component';

@NgModule({
  declarations: [AppComponent, DecksListComponent, DeckComponent, DeckDetailsComponent, CardsListComponent, CardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
