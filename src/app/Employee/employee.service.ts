import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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
    return this.http.get<Employee>(url);
  }

  updateEmployee(employeeId: number, employee: Employee): Observable<Object> {
    const url = `${this.apiUrl}/employees/${employeeId}`;
    return this.http.put(url, employee);
  }

  deleteEmployee(employeeId: number | undefined): Observable<Employee> {
    const url = `${this.apiUrl}/employees/${employeeId}`;
    return this.http.delete<Employee>(url);
  }
}
