import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GameDetailsComponent } from './game-details/game-details.component';
import { SearchLastGameComponent } from './game-details/search-last-game/search-last-game.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GameDetailsComponent,
    SearchLastGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
