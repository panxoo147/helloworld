import { Component, OnInit } from '@angular/core';
import { Status} from './../status';
import { StatusService } from './../status.service';

@Component({
  selector: 'app-ngvstatus',
  templateUrl: './ngvstatus.component.html',
  styleUrls: ['./ngvstatus.component.css']
})
export class NgvstatusComponent implements OnInit {
  onlineList:Status[];
  searchTerm:number;
  constructor(private stService: StatusService ) {
    stService.getList().subscribe(st=> {
      if (st != undefined){
        this.onlineList = st;
      }else{
        this.onlineList = [];
      }
    });
   }
  ngOnInit() {
  }
}
