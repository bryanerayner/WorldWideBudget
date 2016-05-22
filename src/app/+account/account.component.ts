import { Component, OnInit } from '@angular/core';

import { Routes , ROUTER_DIRECTIVES} from '@angular/router';

import { AngularFire, FirebaseAuthState } from 'angularfire2';

import { Observable } from 'rxjs';

import { MdButton } from '@angular2-material/button';


@Component({
  moduleId: module.id,
  selector: 'app-account',
  templateUrl: 'account.component.html',
  styleUrls: ['account.component.css'],
  directives: [
    ROUTER_DIRECTIVES,
    MdButton
  ]
})
@Routes([
  
])
export class AccountComponent implements OnInit {

  protected isLoggedIn: Observable<boolean>;
  
  protected auth: Observable<FirebaseAuthState>;
  
  constructor(public af: AngularFire) {
    let {
      auth
    } = af;
    
    this.isLoggedIn = auth.map((a)=>!!a);
    this.auth = auth.asObservable();
  }
  
  login() {
    this.af.auth.login();
  }

  ngOnInit() {
  }

}
