import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  username = 'davidiumprime';
  isUserLoggedIn: boolean = false;
  constructor(private hardcodedAuthenticationServiceService: HardcodedAuthenticationService) { }

  ngOnInit() {
    this.isUserLoggedIn = this.hardcodedAuthenticationServiceService.isUserLoggedIn();
  }

}
