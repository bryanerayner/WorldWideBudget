import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { WorldWideBudgetAppComponent, environment } from './app/';

import {createStore} from 'redux';
import {rootReducer} from './rootReducer';
import {TodoActions} from './todoActions';


if (environment.production) {
  enableProdMode();
}

bootstrap(WorldWideBudgetAppComponent);
