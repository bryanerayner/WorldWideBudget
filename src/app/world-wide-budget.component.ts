import { Component } from '@angular/core';
import { AccountComponent } from './+account';
import { BankAccountsComponent } from './+bank-accounts';
import { BudgetComponent } from './+budget';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import {HTTP_PROVIDERS} from '@angular/http';

import {Observable} from 'rxjs';

import {MdToolbar} from '@angular2-material/toolbar';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MdButton} from '@angular2-material/button';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';

import {AngularFire} from 'angularfire2';

@Component({
  moduleId: module.id,
  selector: 'world-wide-budget-app',
  templateUrl: 'world-wide-budget.component.html',
  styleUrls: ['world-wide-budget.component.css'],
  directives: [
    ROUTER_DIRECTIVES,
    MD_SIDENAV_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MdButton,
    MdToolbar,
    MdIcon
    ],
  providers: [
    ROUTER_PROVIDERS,
    MdIconRegistry,
    HTTP_PROVIDERS
    ]
})
@Routes([
  {path: '/account', component: AccountComponent},
  {path: '/bank-accounts', component: BankAccountsComponent},
  {path: '/budget', component: BudgetComponent}
])
export class WorldWideBudgetAppComponent {
  title = 'World Wide Budget';
  
  protected userId: Observable<string>;
  
  constructor(public af: AngularFire){
    
    this.userId = af.auth
      .asObservable()
      .filter((f)=>!!f)
      .map((a)=>a.uid);
  }
}
