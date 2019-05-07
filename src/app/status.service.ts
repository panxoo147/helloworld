import { Injectable } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import {Status} from './status';

@Injectable()
export class StatusService {
  private baseurl:string = "https://ngv281.000webhostapp.com/";
  constructor(private http: Http) {

   }
   public getList(): Observable<Status[]> {
   
 
   let url = this.baseurl + "course/statusCheck.php";
   let body = "";
   let header = { headers: new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }) };
   let callUrl: string = url + "?" + body;

   console.log("calling: " + callUrl);
   return this.http.post(url, body, header)
     .map((res: Response) => {
        return this.parseData(res);
     })
     .catch((error: any) => {
       if (error.status == 404){
         console.log ("code note exist" );
         return Observable.of([]);
       }else{
         console.log("throw error" + JSON.stringify(error));
         return Observable.throw(error);
       }
     })
 }

 private parseData(res: Response): Status[] {
   let data = res.json();
   if (data.message != "Success") {
     console.log("error: " + data.Message);
     return [];
   } else {
     let arr:Status[] =[];
     
     for (let dbCourse of data.data){
       
       let c:Status = new Status(dbCourse.status ,
        dbCourse.carID,dbCourse.currentLocation,
        dbCourse.nextLocation,
        dbCourse.name,
        dbCourse.route,
        dbCourse.Carstatus);

       arr.push(c);
     }
     return arr;
   }
 }
}