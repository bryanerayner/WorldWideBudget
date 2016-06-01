import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { WorldWideBudgetAppComponent } from '../app/world-wide-budget.component';

beforeEachProviders(() => [WorldWideBudgetAppComponent]);

describe('App: WorldWideBudget', () => {
  it('should create the app',
      inject([WorldWideBudgetAppComponent], (app: WorldWideBudgetAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'world-wide-budget works!\'',
      inject([WorldWideBudgetAppComponent], (app: WorldWideBudgetAppComponent) => {
    expect(app.title).toEqual('world-wide-budget works!');
  }));
});
