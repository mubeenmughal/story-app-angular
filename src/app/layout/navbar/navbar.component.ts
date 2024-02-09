import { Component, OnInit } from '@angular/core';
import { MENU_CONTENT, ROUTES_CONTENT } from 'src/app/core/constants/constants';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  name: any = 'Story';
  routes: any = ROUTES_CONTENT;
  menuContent: any = MENU_CONTENT;
  constructor() {}

  ngOnInit(): void {}
}
