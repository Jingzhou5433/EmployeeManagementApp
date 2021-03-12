import {AfterViewInit, Component, Input, OnChanges, OnInit, Output, ViewChild} from '@angular/core';
import {EventEmitter} from '@angular/core';
import {EmployeeService} from '../../service/employee.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() currRow;
  @Output() hideForm = new EventEmitter<void>();
  @ViewChild('f') myForm;
  @Input() flagInC: number;
  toBeUpdate: any;
  currId = '';
  defaultOption = 'tech' ;
  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit(): void {
    if (this.currRow != null && this.flagInC === 1){
      this.currId = (' ' + this.currRow._id).slice(1);
      this.toBeUpdate = JSON.parse(JSON.stringify(this.currRow));
      delete this.toBeUpdate._id;
    }
  }

  ngOnChanges(): void{
    if (this.currRow != null){
      // deep copy string
      this.currId = (' ' + this.currRow._id).slice(1);
      // deep copy object
      this.toBeUpdate = JSON.parse(JSON.stringify(this.currRow));
      delete this.toBeUpdate._id;

      if (this.myForm != null && this.toBeUpdate != null && this.flagInC === 1) {
        this.myForm.setValue(this.toBeUpdate);
      }
    }
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      if (this.toBeUpdate != null && this.flagInC === 1) {
        // this.currId = (' ' + this.currRow._id).slice(1);
        this.myForm.setValue(this.toBeUpdate);
        // this.myForm.controls.name.setValue(this.currRow.name);
        // this.myForm.controls.title.setValue( this.currRow.title);
        // this.myForm.controls.dept.setValue(this.currRow.dept);
        // this.myForm.controls.age.setValue(this.currRow.age);
        // this.myForm.controls.hireDate.setValue(this.currRow.hireDate);
        // this.myForm.controls.gender.setValue(this.currRow.gender);
      }
    });
  }

  onSubmit(formValue: object, id, flag): void {
    // If flag==0, it's an add new operation
    // If flag==1, it's an update operaton
    if (flag === 0){
      console.log('In the adding operation');
      this.employeeService.AddEmployee(formValue)
        .subscribe(
          res => {
            console.log('post success!', res);
            Swal.fire('Yikes!', 'Employee add successful!', 'success');
            this.hideForm.emit();
          },
          err => {
            console.log('someThing Went Wrong!', err);
            Swal.fire('Oops!', 'Something went wrong!', 'error');
          });
    }
    if (flag === 1){
      console.log('In the update operation');
      console.log('this id current id: ', id);
      console.log('This is curr form Data: ', formValue);
      this.employeeService.UpdateEmployee(id, formValue).subscribe(
        res => {
          console.log('Update success!', res);
        },
        err => {
          console.log('Error msg: ', err);
        }
      );
      Swal.fire('Yikes!', 'Update successful!', 'success');
      this.hideForm.emit();
    }
    this.myForm.reset();
  }

  clearForm(): void {
    this.hideForm.emit();
    // if (this.toBeUpdate != null){
    //   this.toBeUpdate = {};
    // }
    this.myForm.reset();
  }
}
