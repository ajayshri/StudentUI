import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Injectable, Inject, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { addtask } from '../task/add_tast_interface';

@Injectable()
export class TaskService {

  constructor() { }

  token: any = null;
    private fieldList$ = new Subject<addtask[]>();

  
       fieldList = this.fieldList$.asObservable();
    
    //  set Summary as true and
     setTask(data){
         this.fieldList$.next(data);
     }

    //  get summary is true or false;
    getTask(){
        return this.fieldList;
    }
 // save scratch and win-details
    

//  getScratched Win details .. . 


  
}
