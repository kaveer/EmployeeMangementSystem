import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Employee} from "../employee-list/employee-list.component";

@Component({
  selector: 'ems-add-employee',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.sass'
})
export class AddEmployeeComponent {

  @Output() addEmployeeOutput: EventEmitter<Employee> = new EventEmitter<Employee>();

  name: string = "";
  position: string = "";
  experience: number = 0;
  department: string = "";

  addEmployee() {
    let emp: Employee|undefined = {
      id : 0,
      name : this.name,
      position : this.position,
      experience : Number(this.experience) ,
      department: this.department
    }

    this.addEmployeeOutput.emit(emp);
  }


}
