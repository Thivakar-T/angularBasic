import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildGuard } from '../guard/child.guard';
import { RoleGuard } from '../guard/role.guard';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: "user",
    children: [
      { path: "dashboard", component: DashboardComponent ,canDeactivate:[ChildGuard]}
    ],
    canActivate:[RoleGuard],canActivateChild:[ChildGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
