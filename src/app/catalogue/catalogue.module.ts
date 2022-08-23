import { DetailsPageModule } from './details/details.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogueRoutingModule } from './catalogue-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CatalogueRoutingModule,
    DetailsPageModule
  ]
})
export class CatalogueModule { }
