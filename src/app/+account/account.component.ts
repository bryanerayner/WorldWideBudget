import { Component, OnInit } from '@angular/core';

import { Routes , ROUTER_DIRECTIVES} from '@angular/router';


@Component({
  moduleId: module.id,
  selector: 'app-account',
  templateUrl: 'account.component.html',
  styleUrls: ['account.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
@Routes([
  
])
export class AccountComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
