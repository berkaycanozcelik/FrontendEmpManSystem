import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Employee } from 'src/app/Employee/employee';
import { EmployeeService } from 'src/app/Employee/employee.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnDestroy {
  private createEmployeeSubscription: Subscription | undefined;

  formData: Employee = {
    firstName: '',
    lastName: '',
    emailId: '',
  };
  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  onSubmit(): void {
    this.createEmployeeSubscription = this.employeeService
      .createEmployee(this.formData)
      .subscribe(
        (response) => {
          // Handle success response here
          console.log('Employee created:', response);
          // Redirect to the home page
          this.router.navigateByUrl('/employees');
        },
        (error) => {
          // Handle error response here
          console.error('Error creating employee:', error);
        }
      );
  }

  ngOnDestroy(): void {
    if (this.createEmployeeSubscription) {
      this.createEmployeeSubscription.unsubscribe();
    }
  }
}
