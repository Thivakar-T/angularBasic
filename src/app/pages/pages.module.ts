import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import{BrowserAnimationsModule}from '@angular/platform-browser/animations';
import { PagesRoutingModule } from './pages-routing.module';
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
import { ReactiveFormsModule,FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardComponent,
    PdfComponent,
    BodyComponent,
    SidenavComponent,
    ProductsComponent,
    PagesComponent,
    StatisticsComponent,
    CouponsComponent,
    MediaComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    PagesRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    
  ]
})
export class PagesModule { }
