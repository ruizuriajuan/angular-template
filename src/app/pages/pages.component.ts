import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { HeaderComponent } from '../shared/header/header.component';
import { BreadcrumbsComponent } from '../shared/breadcrumbs/breadcrumbs.component';
import { RouterModule } from '@angular/router';

declare function customInitFunction(): void;


@Component({
  selector: 'app-pages',
  standalone: true,
  imports: [SidebarComponent, HeaderComponent, BreadcrumbsComponent, RouterModule],
  templateUrl: './pages.component.html',
  styles: ``
})
export class PagesComponent implements OnInit {
  linkTheme = document.querySelector('#theme');

  ngOnInit(): void {
    customInitFunction();
    if (localStorage.getItem('theme')) {
      this.linkTheme?.setAttribute('href', localStorage.getItem('theme')!);
    }
  }

}
