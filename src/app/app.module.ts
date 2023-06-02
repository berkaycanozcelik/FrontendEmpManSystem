import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './Employee/employee-list/employee-list.component';
import { NavbarComponent } from './Shared/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './Shared/footer/footer/footer.component';
import { CreateEmployeeComponent } from './Employee/create-employee/create-employee.component';
import { FormComponent } from './Shared/form/form.component';

@NgModule({
  declarations: [AppComponent, EmployeeListComponent, NavbarComponent, FooterComponent, CreateEmployeeComponent, FormComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
