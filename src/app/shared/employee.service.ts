import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { employee } from '../models/employee';
import { ApiFunctionsService } from '../services/api-functions.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService extends ApiFunctionsService<employee> {

  constructor(public http : HttpClient) {
    super("http://localhost:3000/Employees",http)
  }
}
