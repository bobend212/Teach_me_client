import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';


@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [MatButtonModule, MatGridListModule, MatCardModule, MatIconModule, MatTableModule, MatPaginatorModule, MatSortModule],
})
export class MaterialModule {}
