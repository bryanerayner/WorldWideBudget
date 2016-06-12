import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';

import {
  addTransaction,
  updateTransaction,
  deleteTransaction,
  ADD_TRANSACTION,
  UPDATE_TRANSACTION,
  DELETE_TRANSACTION,
  AddTransactionActionPayload
} from './transactions.reducer';

import {
ITransactionStateRecord,
TransactionType,
ITransaction,
ITransactionRecord,
TransactionState,
Transaction
 } from '../models/index';

describe('Reducer: addTransaction', () => {

  it('should only modify state for the correct type of action', ()=>{
    let state = new TransactionState();

    let firstNewState = addTransaction(state, {
      type: 'dummy'
    });

    expect(firstNewState).toBe(state);

    let payload: AddTransactionActionPayload = {
      transaction: new Transaction({
                    date:new Date(),
                    id:'',
                    pair:'',
                    payee:'',
                    payeeId:'',
                    memo: [],
                    type: TransactionType.Debit,
                    account: '',
                    totalAmount: 2
                  })
    }

    let state2 = new TransactionState();
    let secondNewState = addTransaction(state, {
     type: ADD_TRANSACTION,
     payload
    });
    expect(secondNewState).not.toBe(state2);

  });

});
