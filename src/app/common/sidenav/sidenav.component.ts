import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  currentUser = null;
  currentToken = null;

  constructor(public auth: AuthService) {
    this.currentUser = auth.getUser();
    this.currentToken = auth.getToken();
  }

  ngOnInit(): void {
  }

}
