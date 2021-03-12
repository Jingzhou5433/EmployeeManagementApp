import {AfterViewInit, Component, EventEmitter, Inject, OnInit, Output, ViewChild} from '@angular/core';
import {EmployeeService} from '../service/employee.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit, AfterViewInit {
  @Output() fillForm = new EventEmitter<object>();
  p = 1;
  employees: any;
  formVisible: boolean;
  rerender = false;
  currRow: object;
  flagInP: number;
  selectedRow: any;
  searchFilter = '';
  name = 'name';
  department = 'dept';
  gender = 'gender';
  age = 'age';
  title = 'title';
  dataSource: any;
  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit(): void {
    this.refresh();
    this.formVisible = false;
  }
  ngAfterViewInit(): void{
    this.refresh();
  }
  openForm(): void{
      console.log('This is open form function!');
      this.formVisible = true;
      this.flagInP = 0;
  }

  refresh(): void{
    this.employeeService.GetEmployee().subscribe(res => {
      this.employees = res;
    });
  }

  delEmployee(id: any, $event): void{
    console.log('In del function!');
    console.log(id);

    Swal.fire({
        title: 'Are you sure?',
        text: 'You will not be able to recover this imaginary file!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, keep it',
      }).then((result) => {
        if (result.isConfirmed) {
          console.log('Clicked Yes, File deleted!');
          this.employeeService.DeleteEmployee(id).subscribe(
            res => {console.log(res);
            });

        } else if (result.isDismissed) {
          console.log('Clicked No, File is safe!');
        }
      });
    this.formVisible = false;
    $event.preventDefault();
  }

  // Update Employee
  updateEmployee(e: any, event: any): void {
    console.log('This is an employee: ', e);
    this.flagInP = 1;
    this.formVisible = true;
    delete e.__v;
    this.currRow = e;
    event.preventDefault();
  }

  rowRespond(index): void{
    this.selectedRow = index;
  }
}
