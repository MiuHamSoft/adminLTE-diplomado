import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartjsComponent } from './charts/chartjs/chartjs.component';
import { LoginComponent } from './common/login/login.component';
import { GeneralElementsComponent } from './forms/general-elements/general-elements.component';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { FileUploadComponent } from './main/file-upload/file-upload.component';
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
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'widgets',
    canActivate: [AuthGuard],
    component: WidgetsComponent
  },
  {
    path: 'forms',
    children: [
      {
        path: 'general-elements',
        component: GeneralElementsComponent
      }
    ]
  },
  {
    path: 'charts',
    children: [
      {
        path: 'chartjs',
        component: ChartjsComponent
      }
    ]
  },
  {
    path: 'ui',
    children: [
      {
        path: 'modals',
        component: ModalsComponent
      }
    ]
  },
  {
    path: 'ejemplos',
    children: [
      {
        path: 'tablas',
        component: TablesComponent
      },
      {
        path: 'subida-archivos',
        component: FileUploadComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
