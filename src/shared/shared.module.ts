import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/material/material.module';
import { PaginatorComponent } from './container/paginator/paginator.component';
import { CardComponent } from './container/card/card.component';
import { CardDetailsComponent } from './container/card-details/card-details.component';
import { DialogBoxComponent } from './container/dialog-box/dialog-box.component';

@NgModule({
  declarations: [
    PaginatorComponent,
    CardComponent,
    CardDetailsComponent,
    DialogBoxComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
  ],
  exports:[
    PaginatorComponent,
    CardComponent,
    CardDetailsComponent
  ]
})
export class SharedModule { }
