# EmployeeManagementSystem

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


======================

### Exercise: Employee Management System

#### Objective:
Create an Employee Management System that allows you to manage a list of employees, demonstrating the following Angular concepts:
- Angular Components
- Data Binding
- Interpolation
- Property Binding
- Event Binding
- Two-way Data Binding
- Child/Nested Components

#### Requirements:

1. **Create the Main Application Component**:
  - Set up a new Angular project.
  - Create the main application component.

2. **Employee List Component**:
  - Create a component called `EmployeeListComponent` to display a list of employees.
  - Use interpolation to display employee names and other details.
  - Use property binding to dynamically set CSS classes based on employee properties (e.g., highlight employees with more than 5 years of experience).

3. **Employee Detail Component**:
  - Create a nested component called `EmployeeDetailComponent` to show detailed information about a selected employee.
  - Use `@Input` to pass the selected employee from the `EmployeeListComponent` to the `EmployeeDetailComponent`.

4. **Add New Employee Component**:
  - Create a component called `AddEmployeeComponent` to add a new employee.
  - Use two-way data binding for the input fields to capture the new employee details.
  - Use event binding to handle the form submission and add the new employee to the list.

5. **Main Component Integration**:
  - In the main component, use the `EmployeeListComponent` to display the list of employees.
  - When an employee is clicked in the `EmployeeListComponent`, display the employee details in the `EmployeeDetailComponent`.
  - Include the `AddEmployeeComponent` in the main component to allow adding new employees.

#### Steps:

1. **Setup**:
  - Create a new Angular project using Angular CLI.
  - Generate the required components: `EmployeeListComponent`, `EmployeeDetailComponent`, and `AddEmployeeComponent`.

2. **EmployeeListComponent**:
  - Create a list of employees in the component's class.
  - Use `*ngFor` to iterate over the employees and display them in the template.
  - Add a click event to each employee to select and display detailed information.

3. **EmployeeDetailComponent**:
  - Create an `@Input` property to accept an employee object.
  - Display the employee details using interpolation.

4. **AddEmployeeComponent**:
  - Create a form to input employee details.
  - Use two-way data binding to bind form inputs to the component's properties.
  - Handle form submission to emit an event to add the new employee to the list.

5. **Main Component**:
  - Import and use the `EmployeeListComponent`, `EmployeeDetailComponent`, and `AddEmployeeComponent` in the main component.
  - Maintain a selected employee state in the main component to pass to `EmployeeDetailComponent`.
  - Handle the event from `AddEmployeeComponent` to add new employees to the list.

#### Example Data Structure for Employees:
```typescript
export interface Employee {
  id: number;
  name: string;
  position: string;
  experience: number;
  department: string;
}
```

#### Additional Notes:
- Ensure to follow Angular best practices, such as using services for shared data if needed.
- Style the components to make the application user-friendly.
- Test the application thoroughly to ensure all data bindings and component interactions work as expected.
