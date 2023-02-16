import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeckDetailsComponent } from './decks/deck-details/deck-details.component';
import { DecksListComponent } from './decks/decks-list/decks-list.component';

const routes: Routes = [
  { path: '', component: DecksListComponent },
  { path: 'decks/:deckId', component: DeckDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
