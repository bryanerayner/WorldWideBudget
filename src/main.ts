import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { WorldWideBudgetAppComponent, environment } from './app/';

import { 
  FIREBASE_PROVIDERS, 
  defaultFirebase,
  AngularFire,
  firebaseAuthConfig,
  AuthProviders,
  AuthMethods
} from 'angularfire2';


if (environment.production) {
  enableProdMode();
}

bootstrap(WorldWideBudgetAppComponent, [
  FIREBASE_PROVIDERS,
  defaultFirebase('https://project-8175615913913177070.firebaseio.com'),
firebaseAuthConfig({
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
})
]);
