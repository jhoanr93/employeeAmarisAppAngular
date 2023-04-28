import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../interfaces/employee.interface';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  apiUrl = 'https://localhost:7269/api';

  constructor(private http: HttpClient) { }

  getAllEmployees() {
    return this.http.get<Employee[]>(`${this.apiUrl}/Employee`);
  }

  getEmployeeById(id: string) {
    return this.http.get<Employee>(`${this.apiUrl}/Employee/${id}`);
  }
}
