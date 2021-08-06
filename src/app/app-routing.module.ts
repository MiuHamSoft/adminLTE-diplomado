import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartjsComponent } from './charts/chartjs/chartjs.component';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { TablesComponent } from './main/tables/tables.component';
import { WidgetsComponent } from './main/widgets/widgets.component';
import { ModalsComponent } from './ui/modals/modals.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'widgets',
    component: WidgetsComponent
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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
