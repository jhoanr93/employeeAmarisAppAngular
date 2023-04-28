import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service'
import { Employee } from 'src/app/interfaces/employee.interface';



@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {
  employeeId: string = '';
  employees:  Employee[] = [];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getAllEmployees().subscribe(data => {
      console.log(data);
      this.employees = data;
    });
  
  }

  onSubmit() {
    if (this.employeeId !== '') {
      this.employeeService.getEmployeeById(this.employeeId).subscribe(data => {
        this.employees = [data];
      });
    } 
    
    
    if ( this.employeeId == '') {
      this.employeeService.getAllEmployees().subscribe(data => {
        this.employees = data;
      });
    }
  }

}
