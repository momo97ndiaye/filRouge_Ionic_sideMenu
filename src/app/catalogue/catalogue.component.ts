import { CatalogueService } from './catalogue.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss'],
})
export class CatalogueComponent implements OnInit {
  img='https://www.aldi.fr/content/dam/aldi/france/recipes/recettes-du-moment/S18_RECETTE_HAMBURGER_1856_669.jpg/_jcr_content/renditions/original.transform/1817w/img.220822.jpg'

  public folder: string;
  burgers: any;
  menus: any;
  
  constructor(private activatedRoute: ActivatedRoute,private catalogueService:CatalogueService,private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.folder = "Catalogue";
    const observable:Observable<any> = this.catalogueService.getCatalogueObs();
    observable.subscribe(catalogue=>{
      console.log(catalogue);
      this.burgers = catalogue.burgers;
      this.menus = catalogue.menus;
    })

  }


  transformAll(params:string){
    return this.sanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64, '+params);
  }

}
