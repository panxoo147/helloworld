import { Injectable } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import {Course} from './course';

@Injectable()
export class CourseService {
  private baseurl:string = "https://courseexample3.000webhostapp.com/";
  private courseList: Course[] = [
    new Course(1,"cs111","Object Oriented Programming"),
    new Course(1,"cs284","Software Engineering"),
    new Course(1,"cs213","Data Structure")
  ];
  constructor(private http: Http) {

   }
   public getList(): Observable<Course[]> {
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

 private parseData(res: Response): Course[] {
   let data = res.json();
   if (data.message != "Success") {
     console.log("error: " + data.Message);
     return [];
   } else {
     let arr:Course[] =[];
     for (let dbCourse of data.data){
       let c:Course = new Course(dbCourse.id, dbCourse.code ,dbCourse.name);
       //console.log(note.getText())
       arr.push(c);
     } 
     return arr;
   }
 }
   public addCourse (id:number, code:string,name:string):Observable<boolean>{
     let url = this.baseurl+"course/add.php";
     let body = "&cId="+id+"&cCode="+code+"&cName="+name;
     let header = { headers: new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }) };
     let callUrl: string = url + "?" + body;
     console.log("add couse calling: " + callUrl);
     return this.http.post(url, body, header)
     .map((res: Response) => {
        let data = res.json();
        if (data.message == "Success"){
          console.log("add success");
          return true;
        }else{
           console.log("add fail");
           return false;
        }
     })
     .catch((error: any) => {
         console.log("throw error" + JSON.stringify(error));
         return Observable.throw(error);     
     })  
  }
    
}
