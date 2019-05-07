import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import {TableService} from './table.service';
import { TimeComponent } from './time/time.component';
import { MapComponent } from './map/map.component';
import { NgvstatusComponent } from './ngvstatus/ngvstatus.component';
import{StatusService} from './status.service';
import { ngvFilter } from './ngvstatus/ngvFilter.pipe';



const routes: Routes = [ 
  { path: 'home', component: HomeComponent }, 
  { path: 'course', component: CoursesComponent },
  { path: 'time', component: TimeComponent },
  { path: 'map', component: MapComponent },
  { path: 'status', component: NgvstatusComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }
 ]; 


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    HomeComponent,
    TimeComponent,
    MapComponent,
    NgvstatusComponent,
    ngvFilter,
  ],
  imports: [
    BrowserModule,
    FormsModule,    
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [TableService,StatusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
