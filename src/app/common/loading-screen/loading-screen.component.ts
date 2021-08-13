import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { Subscription } from 'rxjs';
import { LoadingService } from 'src/app/services/loading/loading.service';

@Component({
  selector: 'loading-screen',
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        opacity: 1,
        visibility: 'visible'
      })),
      state('closed', style({
        opacity: 0,
        visibility: 'hidden'
      })),
      transition('open => closed', [
        animate('0.5s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ])
    ])
  ]
})
export class LoadingScreenComponent implements OnInit, OnChanges, OnDestroy {

  show: boolean = false;
  private target = document.querySelector("body");
  private loadingSub = new Subscription();

  constructor(private loadingService: LoadingService) {
    this.initLoadingListener();
  }

  ngOnInit(): void {

  }

  ngOnChanges() {
    if (this.show) {
      disableBodyScroll(this.target);

      return;
    }
    enableBodyScroll(this.target);
  }

  ngOnDestroy() {
    this.loadingSub.unsubscribe();
  }

  initLoadingListener() {
    this.loadingSub = this.loadingService.loadingObs.subscribe((val) => {
      if (val) {
        this.show = val;

        return;
      }
      this.show = val;
    });
  }

}
