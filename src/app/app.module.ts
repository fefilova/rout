import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProfileComponent } from './profile/profile.component';
import {UserModule} from './user/user.module';
import { ItemsComponent } from './items/items.component';
import { ItemComponent } from './items/item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ItemsComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    UserModule

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
