import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmpComponent } from './employees/add-emp/add-emp.component';
import { ListEmpComponent } from './employees/list-emp/list-emp.component';
import { UpdateEmpComponent } from './employees/update-emp/update-emp.component';
import { AddManagerComponent } from './managers/add-manager/add-manager.component';
import { ListManagersComponent } from './managers/list-managers/list-managers.component';
import { UpdateManagerComponent } from './managers/update-manager/update-manager.component';
import { HomeComponent } from './shared/home/home.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';


const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "", component: HomeComponent},
  {path: "addEmp", component: AddEmpComponent},
  {path: "listEmp", component: ListEmpComponent},
  {path: "updateEmp/:id", component: UpdateEmpComponent},
  {path: "addManager", component: AddManagerComponent},
  {path: "listManager", component: ListManagersComponent},
  {path: "updateManager/:id", component: UpdateManagerComponent},
  {path: "**", component: NotFoundComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
