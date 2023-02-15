import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DecksListComponent } from './decks/decks-list/decks-list.component';

const routes: Routes = [{ path: '', component: DecksListComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
