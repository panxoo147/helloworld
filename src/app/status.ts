export class Status{

    private memID:number;

    private carID:number;
    private currentLocation:string;
    private nextLocation:string;
    private carStatus:string;

    private name:string;

    private route:number;
    
    constructor(status:string,carID:number,current:string,next:string,name:string,route:number,carStatus:string){

      this.currentLocation = current;
      this.nextLocation = next;
      this.name = name;
      this.route=route;
      this.carID = carID;
      this.carStatus=carStatus;
    }


    public getName():string{
      return this.name;
    }

    public getRoute():number{
        return this.route;
    }
    public getCarid():number{
      return this.carID;
    }
    public getCurrentLoc():string{
      return this.currentLocation;
    }
    public getNextLoc():string{
      return this.nextLocation;
    }
    public getCarstatus():string{
      return this.carStatus;
    }
  }