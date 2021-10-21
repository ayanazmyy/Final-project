import { Component, OnInit } from '@angular/core';
import { ApiFunctionsService } from 'src/app/services/api-functions.service';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-list-emp',
  templateUrl: './list-emp.component.html',
  styleUrls: ['./list-emp.component.css']
})
export class ListEmpComponent implements OnInit {
  allData : []
  constructor(private serv : EmployeeService) {
    this.serv.getEmployee().subscribe((data: any) => {
      this.allData = data
    })
  }

  remove(id) {
    this.serv.delete(id).subscribe(data => {
      window.location.reload()
    })

  }


  ngOnInit(): void {
  }



}
