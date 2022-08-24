import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public appPages = [
    { title: 'Admin', url: '/admin', icon: 'person' },
    { title: 'Catalogue', url: '/catalogue', icon: 'restaurant' },
    { title: 'Livraisons', url: '/folder/Livraisons', icon: 'archive' },
    { title: 'Connexion', url: '/folder/Connexion', icon: 'log-in' },
  ];
  public labels = [/* 'Sign In', 'Mes commandes', 'Panier', 'Catalogue' */];
  constructor() { }

  ngOnInit() {
  }

}
