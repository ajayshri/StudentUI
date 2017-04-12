import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
// import { Task } from '../models/task';
import { HeaderComponent } from '../header/header.component';
import { StorageService } from '../_services/localStorage.service';
// import {TaskService} from '../_services/task.service'
import { addtask } from './add_tast_interface';

const ADDTASK: addtask = {};


@Component({
  selector: 'app-task',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css'],

})
export class AddTaskComponent implements OnInit {

  model = ADDTASK;

  obj_arry: any = [];
  Status = ['Active ', 'Inactive ', 'Pending ','Failed'];
  Priority = ['Important','High Priority','Low Priority'];
  id:any;
  // model = new Task('', '','', this.Tasks[""]);

   submitted = false;
  constructor(private storage: StorageService, private router: Router, private route : ActivatedRoute)
  { 
    this.obj_arry=[];
  
   }

  ngOnInit() {
    debugger;
      this.route.params.subscribe(params =>
        this.id = params['id']
    )   
      
    this.model = {};
    if(this.id != null || this.id !=undefined){ 
    var preData = this.storage.get('addStudent');
    this.obj_arry = preData;
    this.model = preData[this.id];
 
    }  
    
  }
  onSubmit() {
    debugger;
    if(this.id == undefined){
       var preData = this.storage.get('addStudent');
    this.obj_arry = preData;
  //   this.model = preData[this.id];
  //  this.obj_arry = this.obj_arry || [];
    this.obj_arry.push(this.model);
    this.model = {};
    this.storage.add("addStudent", this.obj_arry);
     console.log(this.obj_arry);
    
    }
    else{
      
      var preData = this.storage.get('addStudent');
      preData[this.id]= this.model;
       this.storage.add("addStudent",preData);
    }
    this.router.navigate(['task']);
  }
  
}