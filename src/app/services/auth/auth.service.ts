import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url: string = "https://run.mocky.io/v3/85e319af-c10c-441c-9861-16e09136e82f";
  private urlFail: string = "https://run.mocky.io/v3/43d706bb-a4a8-4ecf-8630-16ae1c6d1142";

  constructor(public http: HttpClient,
    private router: Router,
    private toast: ToastrService) { }

  login(data) {
    this.http.post(this.url, data)
      .subscribe(
        (result: any) => {
          console.log(result)
          this.router.navigate(["/dashboard"]);
          this.toast.success(result.message);

          this.setUserData(result.data);
        },
        (error) => {
          console.log(error)
        }
      );
  }

  logout(){
    
  }

  setUserData(user) {
    let userData = { ...user }
    delete userData.token;
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("token", user.token);
  }

  getUser() {
    let user = localStorage.getItem("user");
    if (user != null) {
      return JSON.parse(user);
    }
  }

  getToken() {
    let token = localStorage.getItem("token");
    if (token != null) {
      return token;
    }
  }

  isTokenExpired(token) {
    return false;
  }
}
