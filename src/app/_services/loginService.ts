import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { ILogin } from '../login/login';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import { Locker } from 'angular2-locker';
import { LocalStorageModule } from 'angular-2-local-storage';

@Injectable()
export class LoginService {
   
   isLoggedIn : boolean = false;
   private authTokenName: string = 'X-AUTH-TOKEN';

    // store the URL so we can redirect after logging in
     redirectUrl: string;

    constructor(
        private http: Http,
        private locker: Locker) { }

        getAuthTokenName(): string {
            return this.authTokenName;
        }

        getAuthToken(): string {
            return this.locker.get(this.authTokenName);
        }
        refreshAuthenticity() {
            if(this.locker.has(this.authTokenName)){
                this.isLoggedIn = true;
            } else {
                this.isLoggedIn = false;
            }
        }

isLoggedInAfterAuthenticityRefresh(){
    this.refreshAuthenticity();
    return this.isLoggedIn;
}



    // login(login: ILogin): Observable<ILogin> {
    //     return this.loginCheck(login);

    // }
    // loginCheck(login :ILogin): Observable<ILogin> { {
    //     return this.http.post('/api/authenticate', JSON.stringify({ username: username, password: password }))
    //         .map((response: Response) => {
    //             // login successful if there's a jwt token in the response
    //             let user = response.json();
    //             if (user && user.token) {
    //                 // store user details and jwt token in local storage to keep user logged in between page refreshes
    //                 localStorage.setItem('currentUser', JSON.stringify(user));
    //             }
    //         });
    // }
    // login(username: string, password: string) {
    //     return this.http.post('/api/authenticate', JSON.stringify({ username: username, password: password }))
    //         .map((response: Response) => {                
    //             let user = response.json();
    //             if (user && user.token) {                    
    //                 localStorage.setItem('currentUser', JSON.stringify(user));
    //             }
    //         });
    // }

    login(credentials:any) : Observable<boolean>
    {

        if(credentials.email==='test' && credentials.password==='test'){
  this.locker.set(this.authTokenName, "TestToken");

      return Observable.of(true).delay(1000).do(val => this.isLoggedIn = true);

     } else{
       debugger;
   this.locker.remove(this.authTokenName);
               return Observable.of(true).delay(1000).do(val => this.isLoggedIn = false);
               

     }
  }

    logout(): void {
        this.isLoggedIn = false;
        this.locker.remove(this.authTokenName);
    }
}
