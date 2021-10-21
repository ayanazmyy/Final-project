import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { inject } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { AddEmpComponent } from '../employees/add-emp/add-emp.component';
import { employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class ApiFunctionsService<T> {
  put(object: employee, arg1: number) {
    throw new Error('Method not implemented.');
  }

  // configUrl = "http://localhost:3000/Employees"
  constructor(@Inject(String) public configUrl: string , public http : HttpClient) {}

  getEmployee() : Observable<T> {
    return this.http.get<T>(this.configUrl)
  }

  getById(id) : Observable<T> {
    return this.http.get<T>(this.configUrl + `/${id}`)
  }

  post(object) : Observable<T> {
    return this.http.post<T>(this.configUrl , object)
  }

  update(object, id) {
    return this.http.put(this.configUrl + `/${id}` , object)
  }

  delete(id) : Observable<T> {
    return this.http.delete<T>(this.configUrl + `/${id}`);
  }
}
