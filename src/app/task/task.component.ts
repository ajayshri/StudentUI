import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { StorageService } from '../_services/localStorage.service';
// import {TaskService} from '../_services/task.service';
import { addtask } from './add_tast_interface';


const ADDTASK: addtask[] = [];
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  providers: [StorageService]
})
export class TaskComponent implements OnInit {

  del_arry: any = [];
  items: string[] = [];
  models: any = ADDTASK;
  modelFilter: any = { name: ''};

  

  constructor(private storage: StorageService, private router: Router ) {
  }

  ngOnInit() {
    debugger;
    var temp = this.storage.get('addStudent');
    this.models = temp;
    
    console.log(this.models);

  }
  // onclick(){
  //   this.Items.push("");
  // }
  deleteCondition(models, index) {
    // this.models.pop();
    console.log(index);

    var del = this.storage.get('addStudent');
    this.del_arry = del;
    if (index > -1) {
      this.del_arry.splice(index, 1);
    }
    //      this.del_arry.splice(this.models, 1);

    this.storage.add('addStudent', this.del_arry);
    this.models = this.storage.get('addStudent');


  }


  update(models, id) {
    console.log(id);
    this.router.navigate(['addtask',id]);
    

  }


  onAdd() {
    this.router.navigate(['addtask']);
  }



}
