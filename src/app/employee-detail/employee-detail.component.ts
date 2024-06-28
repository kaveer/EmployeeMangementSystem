import {Component, Input} from '@angular/core';
import {Employee} from "../employee-list/employee-list.component";

@Component({
  selector: 'ems-employee-detail',
  standalone: true,
  imports: [],
  templateUrl: './employee-detail.component.html',
  styleUrl: './employee-detail.component.sass'
})
export class EmployeeDetailComponent {
  @Input() employeeInfo: Employee | undefined;
}
