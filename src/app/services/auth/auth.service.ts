import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable } from 'rxjs';
import { Endpoints } from 'src/app/enums/endpoints';
import { environment } from 'src/environments/environment';
import { LoadingService } from '../loading/loading.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public http: HttpClient,
    private router: Router,
    private toast: ToastrService,
    private jwtHelper: JwtHelperService,
    private loadingService: LoadingService) {
  }

  login(data) {
    this.loadingService.showLoading();
    this.http.post(`${environment.url}${Endpoints.loginMocky}`, data)
      .subscribe(
        (result: any) => {
          console.log(result)
          this.loadingService.hideLoading();
          this.toast.success(result.message);
          this.setUserData(result.data);

          this.router.navigate(["/dashboard"]);
          setTimeout(() => {
            location.reload();
          }, 500);
        }
      );
  }

  register(data) {
    this.loadingService.showLoading();
    this.http.post(`${environment.url}${Endpoints.registerMocky}`, data)
      .subscribe(
        (result: any) => {
          console.log(result)
          this.loadingService.hideLoading();
          this.router.navigate(["/login"]);
          this.toast.success(result.message);
        }
      );
  }

  logout() {
    localStorage.clear();
    this.router.navigate(["/login"]);
    setTimeout(() => {
      location.reload();
    }, 500);
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
    // if (token != null && token != "" && token != undefined) {
    //   return this.jwtHelper.isTokenExpired(token);
    // }
    return false;
  }
}
