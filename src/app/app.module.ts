import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { SidenavComponent } from './common/sidenav/sidenav.component';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { FooterComponent } from './common/footer/footer.component';
import { ModalsComponent } from './ui/modals/modals.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { WidgetsComponent } from './main/widgets/widgets.component';
import { TablesComponent } from './main/tables/tables.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpService } from './services/http/http.service';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableExporterModule } from 'mat-table-exporter';
import { FileUploadComponent } from './main/file-upload/file-upload.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxFileDropModule } from 'ngx-file-drop';
import { LoginComponent } from './common/login/login.component';
import { GeneralElementsComponent } from './forms/general-elements/general-elements.component';
import { RecaptchaFormsModule, RecaptchaModule } from 'ng-recaptcha';
import { ErrorInterceptor } from './services/interceptors/error.interceptor';
import { RegisterComponent } from './common/register/register.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ChartsModule } from 'ng2-charts';
import { ChartjsComponent } from './charts/chartjs/chartjs.component';
import { PasswordStrengthMeterModule } from 'angular-password-strength-meter';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { TokenInterceptor } from './services/interceptors/token.interceptor';
import { JwtTokenExampleComponent } from './main/jwt-token-example/jwt-token-example.component';
import { LoadingScreenComponent } from './common/loading-screen/loading-screen.component';
import { LoadingService } from './services/loading/loading.service';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { PdfViewerComponent } from './main/pdf-viewer/pdf-viewer.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ExcelExportComponent } from './excel-export/excel-export.component';
import { CsvUploadComponent } from './main/csv-upload/csv-upload.component';
import { StudentsFilterPipe } from './common/filter-pipes/students-filter.pipe';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DragDropComponent } from './main/drag-drop/drag-drop.component';
import { NotFoundComponent } from './common/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidenavComponent,
    DashboardComponent,
    FooterComponent,
    ModalsComponent,
    WidgetsComponent,
    TablesComponent,
    FileUploadComponent,
    LoginComponent,
    GeneralElementsComponent,
    RegisterComponent,
    ChartjsComponent,
    JwtTokenExampleComponent,
    LoadingScreenComponent,
    PdfViewerComponent,
    ExcelExportComponent,
    CsvUploadComponent,
    StudentsFilterPipe,
    DragDropComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableExporterModule,
    FormsModule,
    NgxFileDropModule,
    ReactiveFormsModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    MatTooltipModule,
    ChartsModule,
    PasswordStrengthMeterModule,
    PdfViewerModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    DragDropModule
  ],
  providers: [
    HttpService,
    JwtHelperService,
    LoadingService,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
