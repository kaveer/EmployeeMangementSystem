import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AddEmployeeComponent} from "./add-employee/add-employee.component";
import {EmployeeDetailComponent} from "./employee-detail/employee-detail.component";
import {EmployeeListComponent} from "./employee-list/employee-list.component";

@Component({
  selector: 'ems-root',
  standalone: true,
  imports: [RouterOutlet, AddEmployeeComponent, EmployeeDetailComponent, EmployeeListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'EmployeeManagementSystem';
}
