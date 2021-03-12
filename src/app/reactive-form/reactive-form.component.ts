import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenNames = ['skyler', 'ke'];
  constructor() { }
  ngOnInit(): void {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl('', [Validators.required, this.forbiddenName.bind(this)]),
        email: new FormControl('', [Validators.required, Validators.email], this.forbiddenEmail.bind(this))
      }),
      gender: new FormControl('male'),
      hobbies: new FormArray([])
    });
    // Two hooks to observe changes of the form
    // statusChanges & valueChanges
    this.signupForm.statusChanges.subscribe(
      (status) => {
        console.log(status);
      }
    );

    // set value to the form
    this.signupForm.setValue({
      userData: {
        username: 'Skyler',
        email: 'test2@gmial.com'
      },
      gender: 'female',
      hobbies: []
    });

    // Or use patch() to partial assign value to form
  }

  onSubmit(){
    console.log(this.signupForm);
  }

  onAddHobby(): void{
    const control = new FormControl(null, Validators.required);
    // everything in the parentheses is treated as a formControl
    // push a new control to the array
    (this.signupForm.get('hobbies') as FormArray).push(control);
    // (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  // custom validator
  forbiddenName(c: FormControl): {[s: string]: boolean} {
    if (this.forbiddenNames.indexOf(c.value.toLowerCase()) !== -1){
      return { nameIsForbidden: true};
    }
    return null;
  }

  // async validator
  forbiddenEmail(c: FormControl): Observable<any>| Promise<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (c.value === 'test@test.com'){
            resolve({emailIsForbidden : true});
          }else {
            resolve(null);
          }
        }, 1500
      );
    });
    return promise;
  }
}

