import { PipeTransform, Pipe } from "@angular/core";
import { Status } from "../status";
@Pipe({
    name:'ngvFilter'
})
export class ngvFilter implements PipeTransform{

    transform(onlineList:Status[],searchTerm:number ):Status[]{
        if(!onlineList||!searchTerm){
            return onlineList;
        }
        return onlineList.filter(onlineList=>
            onlineList.getRoute() == searchTerm);
    }
}