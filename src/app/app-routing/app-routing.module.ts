import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './../home/home.component';
import { AdminComponent } from './../admin/admin.component';
import { TableComponent} from './../table/table.component';

@NgModule({
  imports: [RouterModule.forRoot([
    { path: "home",component: HomeComponent },
    { path: "admin",component: AdminComponent },
    { path: "table",component: TableComponent },
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "**", redirectTo: "home", pathMatch: "full" }
  ], { useHash: true}) ], 
exports: [RouterModule],
})
export class AppRoutingModule { }
