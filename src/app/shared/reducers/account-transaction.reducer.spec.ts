import {
  describe,
  ddescribe,
  expect,
  iit,
  it
} from '@angular/core/testing';
import {AccountTransactionReducer} from './account-transaction.reducer';

describe('AccountTransaction', () => {
  it('should create an instance', () => {
    expect(new AccountTransactionReducer()).toBeTruthy();
  });
});
