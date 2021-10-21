import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { manager } from 'src/app/models/manager';
import { ApiFunctionsService } from 'src/app/services/api-functions.service';
import { ManagerService } from 'src/app/shared/manager.service';

@Component({
  selector: 'app-update-manager',
  templateUrl: './update-manager.component.html',
  styleUrls: ['./update-manager.component.css']
})
export class UpdateManagerComponent implements OnInit {

  object = new manager
  id;
  constructor(private serv : ManagerService , private router: Router, private activeRoute : ActivatedRoute) {
    this.id = this.activeRoute.snapshot.paramMap.get('id')
    this.serv.getById(this.id).subscribe(data => {
      this.object = data
    })
  }

  update() {
    this.serv.update(this.object , this.id).subscribe(data => {
      this.router.navigateByUrl('/listManager')
    })
  }
  ngOnInit(): void {
  }

}
