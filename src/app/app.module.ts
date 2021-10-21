import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './shared/home/home.component';
import { AddEmpComponent } from './employees/add-emp/add-emp.component';
import { ListEmpComponent } from './employees/list-emp/list-emp.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { UpdateEmpComponent } from './employees/update-emp/update-emp.component';
import { AddManagerComponent } from './managers/add-manager/add-manager.component';
import { UpdateManagerComponent } from './managers/update-manager/update-manager.component';
import { ListManagersComponent } from './managers/list-managers/list-managers.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AddEmpComponent,
    ListEmpComponent,
    NotFoundComponent,
    UpdateEmpComponent,
    AddManagerComponent,
    UpdateManagerComponent,
    ListManagersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
