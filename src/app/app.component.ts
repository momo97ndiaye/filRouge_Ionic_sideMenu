import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Admin', url: '/admin', icon: 'person' },
    { title: 'Catalogue', url: '/catalogue', icon: 'restaurant' },
    { title: 'Livraisons', url: '/folder/Livraisons', icon: 'archive' },
    { title: 'Connexion', url: '/folder/Connexion', icon: 'log-in' },
    { title: 'Home', url: '/home', icon: 'log-in' },
  ];
  public labels = [/* 'Sign In', 'Mes commandes', 'Panier', 'Catalogue' */];
  constructor() {}
}
