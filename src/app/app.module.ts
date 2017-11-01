import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2TableModule } from 'ng2-table';
import { Ng2BootstrapModule } from 'ngx-bootstrap';
import { PaginationModule } from 'ngx-bootstrap';
import { TabsModule } from 'ngx-bootstrap';
import { CollapseModule } from 'ngx-bootstrap';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { DatePickerModule } from 'ng2-datepicker';
import { Ng2DropdownModule } from 'ng2-material-dropdown';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule, MdInputModule, MdCardModule, MdTabsModule, MdSidenavModule, MdToolbarModule, MdTableModule, MdFormFieldModule} from '@angular/material';

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AdminComponent } from './admin/admin.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    AdminComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    Ng2TableModule,
    Ng2BootstrapModule,
    PaginationModule.forRoot(),
    TabsModule,
    CollapseModule,
    MultiselectDropdownModule,
    DatePickerModule,
    Ng2DropdownModule,
    NoopAnimationsModule,
    MdCardModule,
    MdTabsModule,
    MdSidenavModule,
    MdToolbarModule,
    MdButtonModule,
    MdTableModule,
    MdFormFieldModule,
    MdInputModule,
    Ng2SmartTableModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
