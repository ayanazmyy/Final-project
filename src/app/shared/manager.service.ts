import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { manager } from '../models/manager';
import { ApiFunctionsService } from '../services/api-functions.service';

@Injectable({
  providedIn: 'root'
})
export class ManagerService extends ApiFunctionsService<manager> {

  constructor(public http: HttpClient) {
    super("http://localhost:3000/Managers", http)
   }
}
