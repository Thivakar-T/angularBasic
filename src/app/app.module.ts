import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { NgxSpinnerModule } from "ngx-spinner";
import { ToastrModule } from 'ngx-toastr';
import { PagesModule } from './pages/pages.module';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';
import { AccountModule } from './account/account.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    PagesModule,
    AdminModule,
    UserModule,
    AccountModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
