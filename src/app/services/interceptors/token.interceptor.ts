import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { Observable, of, throwError } from "rxjs";
import { map, catchError } from 'rxjs/operators';
import { environment } from "src/environments/environment";
import { AuthService } from "../auth/auth.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(private auth: AuthService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const currentUser = this.auth.getUser();
        const currentToken = this.auth.getToken();
        const isLoggedIn = currentUser && currentToken;
        const isApiUrl = request.url.startsWith(environment.url);

        if (isLoggedIn && isApiUrl) {
            request = request.clone({
                setHeaders: {
                    Authorization: currentToken
                }
            });
            console.log(request)
        }

        return next.handle(request);
    }
}