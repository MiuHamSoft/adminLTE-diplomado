import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoadingService {

    private loading = new Subject<any>();
    loadingObs = this.loading.asObservable();

    constructor() {
    }

    hideLoading() {
        this.loading.next(false);
    }

    showLoading() {
        this.loading.next(true);
    }
}
