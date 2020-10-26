import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {ItemComponent} from './item/item.component';
import {ItemsComponent} from './items.component';


@NgModule({
  declarations: [
    ItemsComponent,
    ItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ItemsModule { }
