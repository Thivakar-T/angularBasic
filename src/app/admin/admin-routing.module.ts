import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guard/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WorkComponent } from './work/work.component';

const routes: Routes = [
  {
    path: "admin",
    children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "work", component: WorkComponent }
    ],
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
