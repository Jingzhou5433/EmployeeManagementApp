import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { GameBoardComponent } from './game-board/game-board.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import { MyDemosComponent } from './my-demos/my-demos.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SplitServerComponent } from './split-server/split-server.component';
import { ServerElementComponent } from './split-server/server-element/server-element.component';
import { CockpitComponent } from './split-server/cockpit/cockpit.component';
import { ServicePracticeComponent } from './service-practice/service-practice.component';
import { AccountComponent } from './service-practice/account/account.component';
import { NewAccountComponent } from './service-practice/new-account/new-account.component';
import { PipeComponent } from './pipe/pipe.component';
import {ShortenPipe} from './pipe/shorten.pipe';
import { FilterPipe } from './pipe/filter.pipe';
import { EmployeeComponent } from './employee/employee.component';
import {HttpClientModule} from '@angular/common/http';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AddPersonComponent } from './employee/add-person/add-person.component';

import { ReplcaePipe } from './employee/replcae.pipe';
import { SearchByPipe } from './employee/search-by.pipe';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {NgxPaginationModule} from 'ngx-pagination';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ObservableComponent } from './observable/observable.component';



@NgModule({
  declarations: [
    AppComponent,
    GameBoardComponent,
    MyDemosComponent,
    SplitServerComponent,
    ServerElementComponent,
    CockpitComponent,
    ServicePracticeComponent,
    AccountComponent,
    NewAccountComponent,
    PipeComponent,
    ShortenPipe,
    FilterPipe,
    EmployeeComponent,
    AddPersonComponent,
    ReplcaePipe,
    SearchByPipe,
    ReactiveFormComponent,
    ObservableComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    NgxPaginationModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
