import { Component, OnInit } from '@angular/core';
import { BankAccountsComponent } from './+bank-accounts';
import { Routes , ROUTER_DIRECTIVES} from '@angular/router';
import { TransactionsComponent } from './+transactions';
import { BudgetComponent } from './+budget';

@Component({
  moduleId: module.id,
  selector: 'app-accounts',
  templateUrl: 'accounts.component.html',
  styleUrls: ['accounts.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
@Routes([
  {path: '/bank-accounts', component: BankAccountsComponent},
  {path: '/bank-accounts', component: BankAccountsComponent},
  {path: '/transactions', component: TransactionsComponent},
  {path: '/budget', component: BudgetComponent}
])
export class AccountsComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
