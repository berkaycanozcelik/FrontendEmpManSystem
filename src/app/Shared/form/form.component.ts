import { Component, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, take } from 'rxjs';
import { Employee } from 'src/app/Employee/employee';
import { EmployeeService } from 'src/app/Employee/employee.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnDestroy {
  @Input() formTitle: string = '';
  private createEmployeeSubscription: Subscription | undefined;

  @Input() formData: Employee = {
    firstName: '',
    lastName: '',
    emailId: '',
  };

  isCreate: boolean = false;

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    const url = this.router.url;
    //checks the page we are on to adjust the button
    url.includes('create-employee')
      ? (this.isCreate = true)
      : (this.isCreate = false);
  }

  onSubmit(): void {
    this.createEmployeeSubscription = this.employeeService
      .createEmployee(this.formData)
      .pipe(
        take(1), // Ensure that the subscription completes after receiving one value
      )
      .subscribe({
        next: (response) => {
          // Handle success response here
          console.log('Employee created:', response);
          // Redirect to the home page
          this.router.navigateByUrl('/employees');
        },
        error: (error) => {
          // Handle error response here
          console.error('Error creating employee:', error);
        },
      });
  }

  onUpdate() {
    this.employeeService
      .updateEmployee(this.activatedRoute.snapshot.params['id'], this.formData)
      .pipe(
        take(1), // Ensure that the subscription completes after receiving one value
      )
      .subscribe({
        next: (response) => {
          // Handle success response here
          console.log('Employee updated:', response);
          this.router.navigateByUrl('/employees');
        },
        error: (error) => {
          // Handle error response here
          console.error('Error updating employee:', error);
        },
      });
  }

  ngOnDestroy(): void {
    if (this.createEmployeeSubscription) {
      this.createEmployeeSubscription.unsubscribe();
    }
  }
}
