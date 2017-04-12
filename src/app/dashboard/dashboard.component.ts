import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup,FormControl, FormBuilder, Validators } from '@angular/forms';
import { Subscription }       from 'rxjs/Subscription';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _route: ActivatedRoute,
        private _router: Router,
         private _fb: FormBuilder) { }

  ngOnInit() {
    // this._router.navigateByUrl("/Home/dashboard/Index");
  }

}
