import { CatalogueComponent } from './catalogue.component';
import { CatalogueModule } from './catalogue.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component:CatalogueComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogueRoutingModule { }
