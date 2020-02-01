import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { from } from "rxjs";
import { AddComponent } from "./user/add/add.component";
import { LoginComponent } from "./authentication/component/login/login.component";

const routes: Routes = [
  { path: "", redirectTo: "", pathMatch: "full" },
  { path: "add", component: AddComponent },
  { path: "login", component: LoginComponent }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
