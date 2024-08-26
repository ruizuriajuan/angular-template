import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, ActivationEnd, Data, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap, Subscription, tap } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  standalone: true,
  imports: [],
  templateUrl: './breadcrumbs.component.html',
  styles: ``
})
export class BreadcrumbsComponent implements OnDestroy{

  titulo = '';
  tituloSub$: Subscription;

  constructor(private activatedRoute:ActivatedRoute, private router:Router) {
    this.tituloSub$ = this.getDataRoute().subscribe(
      (data) => {
        this.titulo = data['titulo'];
        document.title = this.titulo;
      }
    )
  }
  ngOnDestroy(): void {
    this.tituloSub$.unsubscribe();
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



