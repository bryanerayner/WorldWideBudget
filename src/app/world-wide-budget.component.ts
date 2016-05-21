import { Component } from '@angular/core';
import { AccountComponent } from './+account';
import { BankAccountsComponent } from './+bank-accounts';
import { BudgetComponent } from './+budget';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';

import {MdToolbar} from '@angular2-material/toolbar';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';



@Component({
  moduleId: module.id,
  selector: 'world-wide-budget-app',
  templateUrl: 'world-wide-budget.component.html',
  styleUrls: ['world-wide-budget.component.css'],
  directives: [
    ROUTER_DIRECTIVES,
    MD_SIDENAV_DIRECTIVES,
    MdToolbar
    ],
  providers: [
    ROUTER_PROVIDERS
    ]
})
@Routes([
  {path: '/account/...', component: AccountComponent},
  {path: '/bank-accounts/...', component: BankAccountsComponent},
  {path: '/budget/...', component: BudgetComponent}
])
export class WorldWideBudgetAppComponent {
  title = 'World Wide Budget';
  subTitle = 'A budget program for citizens of the globe';
}
