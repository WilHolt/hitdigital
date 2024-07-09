import { Component } from '@angular/core';

@Component({
  selector: 'hit-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  menuItems = [
  {
    label: 'Introdução',
    path: 'introducao'
  },
  {
    label: 'Contato',
    path: 'contato'
  }
  ]

}
