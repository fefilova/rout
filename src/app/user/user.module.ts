import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {UserComponent} from './user.component';
import { AddComponent } from './add/add.component';
import { RestoreComponent } from './restore/restore.component';


@NgModule({
  declarations: [
    UserComponent,
    AddComponent, 
    RestoreComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class UserModule { }
