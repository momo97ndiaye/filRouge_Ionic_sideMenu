import { AdminComponent } from './admin/admin.component';
import { HomePageModule } from './home/home.module';
import { SharedDirectivesModule } from './directives/shared-directives.module';
import { CatalogueRoutingModule } from './catalogue/catalogue-routing.module';
import { CatalogueModule } from './catalogue/catalogue.module';
import { DetailsPageModule } from './catalogue/details/details.module';
import { DetailsPageRoutingModule } from './catalogue/details/details-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SwiperModule } from 'swiper/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { IonicHeaderParallaxModule } from 'ionic-header-parallax';

@NgModule({
  declarations: [AppComponent,CatalogueComponent,AdminComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule,BrowserModule,FormsModule,DetailsPageModule,CatalogueModule,CatalogueRoutingModule,SharedDirectivesModule,
    IonicHeaderParallaxModule,HomePageModule,SwiperModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
