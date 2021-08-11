import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  url: string;

  constructor(public http: HttpClient) {
    this.getURL();
  }

  getURL() {
    this.url = "https://run.mocky.io/v3/85546007-7339-4636-bdc8-405f4ed5a669";
  }

  retrieveData(endpoint) {
    var subject = new Subject<any>();
    this.http.get(this.url)
      .subscribe(
        (result) => subject.next(result),
        (failure) => this.showError(failure)
      );
    return subject.asObservable();
  }

  showError(message) {
    console.log(message);
  }
}
