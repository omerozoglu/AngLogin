import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router'
import { CommonModule } from '@angular/common';
import { from } from 'rxjs';
import { AddComponent } from './user/add/add.component';


const routes: Routes = [
  {path:'',redirectTo:'', pathMatch:'full'},
  {path:'add',component:AddComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
