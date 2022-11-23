import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuard } from '../guard/role.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PdfComponent } from './pdf/pdf.component';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ProductsComponent } from './products/products.component';
import { PagesComponent } from './pages/pages.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { CouponsComponent } from './coupons/coupons.component';
import { MediaComponent } from './media/media.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {
    path: "pages",component: DashboardComponent,
    children: [
      { path: "", redirectTo:'dashboard',pathMatch:'full'},
      { path: "dashboard", component: PdfComponent },
      { path: "body", component: BodyComponent },
      { path: "product", component: ProductsComponent },
      { path: "pages", component: PagesComponent },
      { path: "statistic", component: StatisticsComponent },
      { path: "coupons", component: CouponsComponent },
      { path: "media", component: MediaComponent },
      { path: "setting", component: SettingsComponent },
    ],
    canActivate:[RoleGuard]
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
