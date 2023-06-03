import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { Observable, take } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  employees$!: Observable<Employee[]>;

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.employees$ = this.employeeService.getEmployees();
  }

  updateEmployee(id: number | undefined) {
    this.router.navigate(['/update-employee/' + id]);
  }

  deleteEmployee(id: number | undefined) {
    this.employeeService
      .deleteEmployee(id)
      .pipe(take(1))
      .subscribe({
        next: (response) => {
          console.log('Employee succesfully Deleted');
          this.employees$ = this.employeeService.getEmployees();
        },

        error: (error) => {
          console.log('Error by deleting employee: ', error);
        },
      });
  }
}
