import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-jwt-token-example',
  templateUrl: './jwt-token-example.component.html',
  styleUrls: ['./jwt-token-example.component.scss']
})
export class JwtTokenExampleComponent implements OnInit {

  token = `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE2Mjg4MDk2NDgsImV4cCI6MTY2MDM0NTY0OCwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0.iRxVEWvQgFF3Fjcmi3ELdA4ScpKZVUNrPkkeKvNf0nw`;
  expirationDate;
  isExpired;
  payload;

  constructor(private jwtHelper: JwtHelperService) { }

  ngOnInit(): void {
  }

  decodeToken() {
    this.expirationDate = this.jwtHelper.getTokenExpirationDate(this.token);
    this.isExpired = this.jwtHelper.isTokenExpired(this.token);
    this.payload = this.jwtHelper.decodeToken(this.token);
    console.log(this.payload)
  }

}
