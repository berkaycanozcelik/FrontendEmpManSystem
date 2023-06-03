import { Component, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
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

  isUpdate: boolean = false;
  isCreate: boolean = false;

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const url = this.router.url;
    //checks the page we are on to adjust the button
    url.includes('create-employee')
      ? (this.isCreate = true)
      : (this.isUpdate = true);
  }

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

  onUpdate() {
    console.log('FORM DATA', this.formData);

    this.employeeService.updateEmployee(
      this.activatedRoute.snapshot.params['id'],
      this.formData
    );
  }

  ngOnDestroy(): void {
    if (this.createEmployeeSubscription) {
      this.createEmployeeSubscription.unsubscribe();
    }
  }
}
