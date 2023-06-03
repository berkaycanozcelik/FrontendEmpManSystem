import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private apiUrl = 'http://localhost:8080/api/v1';

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<Employee[]> {
    const url = `${this.apiUrl}/employees`;
    return this.http.get<Employee[]>(url);
  }

  createEmployee(employee: Employee): Observable<Employee> {
    const url = `${this.apiUrl}/employee`;
    return this.http.post<Employee>(url, employee);
  }

  getEmployeeById(employeeId: number): Observable<Employee> {
    const url = `${this.apiUrl}/employees/${employeeId}`;
    return this.http.get<Employee>(`${url}`);
  }
}
