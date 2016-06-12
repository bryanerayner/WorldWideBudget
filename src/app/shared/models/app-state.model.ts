import * as immutable from 'immutable';

import Map = immutable.Map;
import Record = immutable.Record;

import {
    TypedRecord
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
export interface ITransactionStateRecord extends ITransactionState, TypedRecord<ITransactionState, ITransactionStateRecord> {
    
}

const defaultTransactionState:ITransactionState = {
    transactions: Map<string, ITransactionRecord>()
};
export const TransactionState = Record(defaultTransactionState, 'TransactionState') as any as ITransactionStateRecord;




interface IBankAccountState {
    accounts: Map<string, BankAccount>;
}
const defaultBankAccountState : IBankAccountState = {
    accounts: Map<string, BankAccount>()
};
export interface IBankAccountStateRecord extends IBankAccountState, TypedRecord<IBankAccountState, IBankAccountStateRecord>{
}
export const BankAccountState = Record(defaultBankAccountState, 'BankAccountState') as any as IBankAccountStateRecord;




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


export interface IAppStateRecord extends IAppState, TypedRecord<IAppState, IAppStateRecord>{}

export const AppState = Record(defaultAppState, 'AppState');