import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {CharacterComponent} from './overview/character/character.component';
import {TrainingComponent} from './overview/training/training.component';
import {ShopComponent} from './overview/shop/shop.component';
import {CreaturesComponent} from './overview/creatures/creatures.component';

const routes: Routes = [
  { path: '', redirectTo: '/character', pathMatch: 'full' },
  { path: 'character', component: CharacterComponent },
  { path: 'training', component: TrainingComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'creatures', component: CreaturesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
