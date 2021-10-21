import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { manager } from 'src/app/models/manager';
import { ManagerService } from 'src/app/shared/manager.service';

@Component({
  selector: 'app-add-manager',
  templateUrl: './add-manager.component.html',
  styleUrls: ['./add-manager.component.css']
})
export class AddManagerComponent implements OnInit {

  object = new manager
  constructor(private serv : ManagerService , private router : Router) {}

  ngOnInit(): void {
  }
  save() {
    this.serv.post(this.object).subscribe(data => {
      this.router.navigateByUrl('listManager')
    })
  }


}
