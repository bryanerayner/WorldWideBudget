import { Component } from '@angular/core';
import { AccountsComponent } from './+accounts';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'world-wide-budget-app',
  templateUrl: 'world-wide-budget.component.html',
  styleUrls: ['world-wide-budget.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  {path: '/accounts/...', component: AccountsComponent}
])
export class WorldWideBudgetAppComponent {
  title = 'world-wide-budget works!';
}
