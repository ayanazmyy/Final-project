import { Component, OnInit } from '@angular/core';
import { ManagerService } from 'src/app/shared/manager.service';

@Component({
  selector: 'app-list-managers',
  templateUrl: './list-managers.component.html',
  styleUrls: ['./list-managers.component.css']
})
export class ListManagersComponent implements OnInit {

  allData : []
  constructor(private serv : ManagerService) {
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
