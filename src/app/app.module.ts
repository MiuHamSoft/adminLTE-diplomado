import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { SidenavComponent } from './common/sidenav/sidenav.component';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { FooterComponent } from './common/footer/footer.component';
import { ChartjsComponent } from './charts/chartjs/chartjs.component';
import { ChartsModule } from 'ng2-charts';
import { ModalsComponent } from './ui/modals/modals.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { WidgetsComponent } from './main/widgets/widgets.component';
import { TablesComponent } from './main/tables/tables.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './services/http.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidenavComponent,
    DashboardComponent,
    FooterComponent,
    ChartjsComponent,
    ModalsComponent,
    WidgetsComponent,
    TablesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
  ],
  providers: [
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
