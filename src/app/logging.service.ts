import { Injectable } from "@angular/core";

@Injectable()
export class LoggingService{
    logStatusChange(status : string){
        console.log('A new server status has changed'+ status);
        
    }
}