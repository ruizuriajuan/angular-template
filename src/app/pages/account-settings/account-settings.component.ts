import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-settings',
  standalone: true,
  imports: [],
  templateUrl: './account-settings.component.html',
  styleUrl: './account-settings.component.css'
})
export class AccountSettingsComponent implements OnInit {

  linkTheme = document.querySelector('#theme');
  links: NodeListOf<Element> = document.querySelectorAll('.selector');

  ngOnInit(): void {
    this.links = document.querySelectorAll('.selector');
    this.checkTheme();
  }


  changeTheme(theme: string) {
    const url = `./assets/css/colors/${theme}.css`;
    this.linkTheme?.setAttribute('href', url);
    localStorage.setItem('theme', url);
    this.checkTheme();
  }

  checkTheme() {
    this.links.forEach(elem => {
      elem.classList.remove('working');
      const btnTheme = elem.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;
      const currentTheme = this.linkTheme?.getAttribute('href');
      if (btnThemeUrl === currentTheme) {
        elem.classList.add('working'); //pone el check en el btn
      }
    })
  }

}
