import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './../home/home.component';

@NgModule({
  imports: [RouterModule.forRoot([
    { path: "home",component: HomeComponent },
    { path: "", redirectTo: "home", pathMatch: "full" },
    { path: "**", redirectTo: "home", pathMatch: "full" }
  ], { useHash: true}) ],
exports: [RouterModule],
})
export class AppRoutingModule { }
