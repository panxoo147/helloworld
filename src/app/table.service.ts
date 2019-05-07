import { Injectable } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import {Table} from './table';

@Injectable()
export class TableService {
  private baseurl:string = "https://ngv281.000webhostapp.com/";
  constructor(private http: Http) {

   }
   public getList(): Observable<Table[]> {
   
 
   let url = this.baseurl + "course/list.php";
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

 private parseData(res: Response): Table[] {
   let data = res.json();
   if (data.message != "Success") {
     console.log("error: " + data.Message);
     return [];
   } else {
     let arr:Table[] =[];
 
     for (let dbCourse of data.data){
       let c:Table = new Table(dbCourse.memID, dbCourse.uname ,dbCourse.name,dbCourse.route);
       arr.push(c);
     }
     return arr;
   }
 }
}