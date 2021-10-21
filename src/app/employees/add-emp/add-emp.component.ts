import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { employee } from 'src/app/models/employee';
import { ApiFunctionsService } from 'src/app/services/api-functions.service';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {
  object = new employee
  constructor(private serv : EmployeeService , private router : Router) {}

  ngOnInit(): void {
  }
  save() {
    this.serv.post(this.object).subscribe(data => {
      this.router.navigateByUrl('listEmp')
    })
  }
}
