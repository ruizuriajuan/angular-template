import { Component } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Data, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap, tap } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  standalone: true,
  imports: [],
  templateUrl: './breadcrumbs.component.html',
  styles: ``
})
export class BreadcrumbsComponent {

  titulo = '';

  constructor(private activatedRoute:ActivatedRoute, private router:Router) {

    this.getDataRoute().subscribe(
      (data) => {
        this.titulo = data['titulo'];
        console.log('titutlo',this.titulo);
      }
    )
  }

  getDataRoute(){
    return this.router.events
    .pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map((route) => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }),
      //mergeMap((route) => route.paramMap),
      mergeMap((route) => route.data),
    )    
  }
}



