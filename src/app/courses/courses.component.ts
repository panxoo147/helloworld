import { Component, OnInit } from '@angular/core';
import { Table} from './../table';
import { TableService } from './../table.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
   tableList:Table[];
  constructor(private couseService: TableService ) {
    couseService.getList().subscribe(courses=> {
      if (courses != undefined){
        this.tableList = courses;
      }else{
        this.tableList = [];
      }
    });
   }

  ngOnInit() {
  }

}
