import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {OverviewComponent} from './overview/overview.component';
import {AppRoutingModule} from './app-routing.module';
import {MenuComponent} from './overview/menu/menu.component';
import { CharacterComponent } from './overview/character/character.component';
import {StatisticsComponent} from './overview/character/statistics/statistics.component';
import { TrainingComponent } from './overview/training/training.component';
import { ShopComponent } from './overview/shop/shop.component';
import { CreaturesComponent } from './overview/creatures/creatures.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    StatisticsComponent,
    MenuComponent,
    CharacterComponent,
    TrainingComponent,
    ShopComponent,
    CreaturesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
