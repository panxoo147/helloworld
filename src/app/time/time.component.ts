import { Component, OnInit } from '@angular/core';
import { Status} from './../status';
import { StatusService } from './../status.service';
@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {
   private onlineList:Status[];
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
