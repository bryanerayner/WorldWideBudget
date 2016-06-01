import * as immutable from 'immutable';

import Map = immutable.Map;
import Record = immutable.Record;

import {
    TypedModel
} from './model-helpers';

import {
    UserAccount
} from './user-account.model';
import {
    Transaction,
    ITransactionRecord
} from './transaction.model';
import {
    BankAccount
} from './bank-account.model';
import {
    Budget
} from './budget.model';


interface ITransactionState {
    transactions: Map<string, ITransactionRecord>;    
}
export interface ITransactionStateRecord extends ITransactionState, TypedModel<ITransactionStateRecord> {
    
}
const defaultTransactionState:ITransactionState = {
    transactions: Map<string, ITransactionRecord>()
};

export const TransactionState = Record(defaultTransactionState, 'TransactionState') as ITransactionStateRecord;




interface IBankAccountState {
    accounts: Map<string, BankAccount>;
}
const defaultBankAccountState : IBankAccountState = {
    accounts: Map<string, BankAccount>()
};
export interface IBankAccountStateRecord extends IBankAccountState, TypedModel<IBankAccountStateRecord>{
}
export const BankAccountState = Record(defaultBankAccountState, 'BankAccountState') as IBankAccountStateRecord;




interface IAppState {
    user: UserAccount;
    
    transactions: ITransactionStateRecord;
    
    bankAccounts: IBankAccountStateRecord; 
    
    budget: Budget;
}

const defaultAppState:IAppState = {
    user: null,
    transactions: new TransactionState(),
    bankAccounts: new BankAccountState(),
    budget: null
};


export interface IAppStateRecord extends IAppState, TypedModel<IAppStateRecord>{}

export const AppState = Record(defaultAppState, 'AppState');