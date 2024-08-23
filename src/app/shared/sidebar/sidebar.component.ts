import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarService } from '../../services/sidebar.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styles: ``
})
export class SidebarComponent {

  sideMenu: any = [];

  constructor(private sidebarService: SidebarService) {
    this.sideMenu = sidebarService.menu;
  }

}
