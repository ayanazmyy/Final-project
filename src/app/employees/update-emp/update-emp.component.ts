import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { employee } from 'src/app/models/employee';
import { ApiFunctionsService } from 'src/app/services/api-functions.service';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-update-emp',
  templateUrl: './update-emp.component.html',
  styleUrls: ['./update-emp.component.css']
})
export class UpdateEmpComponent implements OnInit {
  object = new employee
  id;
  constructor(private serv : EmployeeService , private router: Router, private activeRoute : ActivatedRoute) {
    this.id = this.activeRoute.snapshot.paramMap.get('id')
    this.serv.getById(this.id).subscribe(data => {
      this.object = data
    })
  }

  update() {
    this.serv.update(this.object , this.id).subscribe(data => {
      this.router.navigateByUrl('/listEmp')
    })
  }
  ngOnInit(): void {
  }

}
