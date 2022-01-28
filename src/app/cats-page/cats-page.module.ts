import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatsPageComponent } from './cats-page.component';
import { CatsPageRoutingModule } from './cats-page-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CatsPageComponent
  ],
  imports: [
    CommonModule,
    CatsPageRoutingModule,
    SharedModule
  ]
})
export class CatsPageModule { }
