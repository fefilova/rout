import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfileComponent} from './profile/profile.component';
import {UserComponent} from './user/user.component';
import {AddComponent} from './user/add/add.component';
import {RestoreComponent} from './user/restore/restore.component';
import {ItemsComponent} from './items/items.component';
import {ItemComponent} from './items/item/item.component';

const routes: Routes = [
  {path: '', redirectTo: 'profile', pathMatch: 'full'},
  {path: 'profile', component: ProfileComponent},
  {path: 'user', component: UserComponent, children: [
    {path: '', redirectTo: 'add', pathMatch: 'full'},
    {path: 'add', component: AddComponent},
    {path: 'restore', component: RestoreComponent},
    {path: '', component: AddComponent}
  ]},
  {path: '', redirectTo: 'items', pathMatch: 'full'},
  {path: 'items', component: ItemsComponent},
  {path: 'item/:id', component: ItemComponent}
  ];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
