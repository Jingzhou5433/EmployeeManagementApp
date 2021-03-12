import { Injectable } from '@angular/core';
import {catchError, map, tap} from 'rxjs/operators';
import {Observable, Subject, Subscription, throwError} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {error} from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private API_URL = `${environment.API_URL}`;
  public currRow: object;

  constructor(private http: HttpClient) { }


  GetEmployee(): Observable<any>{
    return this.http.get(this.API_URL + '/employee', {withCredentials: true})
      .pipe(tap((res) => {
      return res;
    }));
  }

  AddEmployee(formValue: object): Observable<any>{
    console.log('In service');
    console.log(formValue);
    return this.http.post(this.API_URL + '/addEmployee', formValue)
      .pipe(res => {
        return res;
      });
  }

  DeleteEmployee(id: any): Observable<{ }> {
    return this.http.delete(this.API_URL + '/delEmployee/' + id)
      .pipe();
  }

  UpdateEmployee(id: any, formValue): Observable<any>{
    return this.http.put(this.API_URL + '/updateEmployee/' + id, formValue)
      .pipe(res => {
        return res;
      });
  }
}
