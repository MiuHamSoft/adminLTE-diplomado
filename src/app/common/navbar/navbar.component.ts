import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  currentUser = null;
  currentToken = null;

  constructor(public auth: AuthService) {
    this.currentUser = auth.getUser();
    this.currentToken = auth.getToken();
  }

  ngOnInit(): void {
  }

  doLogout(){
    this.auth.logout();
  }

}
