import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartjsComponent } from './charts/chartjs/chartjs.component';
import { LoginComponent } from './common/login/login.component';
import { NotFoundComponent } from './common/not-found/not-found.component';
import { RegisterComponent } from './common/register/register.component';
import { ExcelExportComponent } from './excel-export/excel-export.component';
import { GeneralElementsComponent } from './forms/general-elements/general-elements.component';
import { CsvUploadComponent } from './main/csv-upload/csv-upload.component';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { DragDropComponent } from './main/drag-drop/drag-drop.component';
import { FileUploadComponent } from './main/file-upload/file-upload.component';
import { JwtTokenExampleComponent } from './main/jwt-token-example/jwt-token-example.component';
import { PdfViewerComponent } from './main/pdf-viewer/pdf-viewer.component';
import { TablesComponent } from './main/tables/tables.component';
import { WidgetsComponent } from './main/widgets/widgets.component';
import { AuthGuard } from './services/auth/auth.guard';
import { ModalsComponent } from './ui/modals/modals.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registro',
    component: RegisterComponent
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    component: DashboardComponent
  },
  {
    path: 'widgets',
    canActivate: [AuthGuard],
    component: WidgetsComponent
  },
  {
    path: 'forms',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'general-elements',
        component: GeneralElementsComponent
      }
    ]
  },
  {
    path: 'charts',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'chartjs',
        component: ChartjsComponent
      }
    ]
  },
  {
    path: 'ui',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'modals',
        component: ModalsComponent
      }
    ]
  },
  {
    path: 'ejemplos',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'tablas',
        component: TablesComponent
      },
      {
        path: 'subida-archivos',
        component: FileUploadComponent
      },
      {
        path: 'jwt-token',
        component: JwtTokenExampleComponent
      },
      {
        path: 'pdf-viewer',
        component: PdfViewerComponent
      },
      {
        path: 'exceljs',
        component: ExcelExportComponent
      },
      {
        path: 'procesar-csv',
        component: CsvUploadComponent
      },
      {
        path: 'drag-drop',
        component: DragDropComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
