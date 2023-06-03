import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './Employee/employee-list/employee-list.component';
import { CreateEmployeeComponent } from './Employee/create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './Employee/update-employee/update-employee.component';

const routes: Routes = [
  { path: '', redirectTo: '/employees', pathMatch: 'full' },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'create-employee', component: CreateEmployeeComponent },
  { path: 'update-employee/:id', component: UpdateEmployeeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
