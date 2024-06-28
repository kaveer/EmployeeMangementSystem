import { Component } from '@angular/core';
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {EmployeeDetailComponent} from "../employee-detail/employee-detail.component";
import {AddEmployeeComponent} from "../add-employee/add-employee.component";

export interface Employee {
  id: number;
  name: string;
  position: string;
  experience: number;
  department: string;
}

@Component({
  selector: 'ems-employee-list',
  standalone: true,
  imports: [
    NgForOf,
    NgClass,
    EmployeeDetailComponent,
    NgIf,
    AddEmployeeComponent
  ],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.sass'
})
export class EmployeeListComponent {

  showAddEmployee: boolean = false;
  employeeDetails : Employee | undefined;
  employees: Employee[] = [
    {id : 1, name : "Lucas Rivera", department : "Software Development", experience : 2, position : "Junior"},
    {id : 2, name : "Emily Watson", department : "Quality Assurance", experience : 5, position : "Senior"},
    {id : 3, name : "Ethan Cooper", department : "Network and Infrastructure", experience : 10, position : "Lead"},
    {id : 4, name : "Sophie Bennett", department : "Cybersecurity", experience : 3, position : "Junior"},
    {id : 5, name : "Chloe Mitchell", department : "IT Support", experience : 22, position : "Lead"},
    {id : 6, name : "Benjamin Flores", department : "Software Development", experience : 12, position : "Lead"},
  ]

  getEmployeeDetails(emp: Employee) {
    this.employeeDetails = emp
    this.showAddEmployee = false;
  }

  showAddEmployeeComponent() {
    this.employeeDetails = undefined;
    this.showAddEmployee = true;
  }

  getAddedEmployee(emp: Employee): void{
    const lastEmployee: Employee = this.employees[this.employees.length - 1];
    emp.id = lastEmployee.id + 1;

    this.employees.push(emp);
  }
}
