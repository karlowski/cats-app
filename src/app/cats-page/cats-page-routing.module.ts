import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatsPageComponent } from './cats-page.component';
import { BreedsResolver } from '../shared/resolvers/breeds.resolver';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'cats',
    pathMatch: 'full'
  },
  {
    path: 'cats',
    component: CatsPageComponent,
    resolve: { breeds: BreedsResolver }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CatsPageRoutingModule { }
