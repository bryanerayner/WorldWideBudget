import {
    Record
} from 'immutable';

import {
    TypedRecord
} from './model-helpers';

export const enum TransactionType {
    /**
     * The transaction type hasn't been defined
     */
    NotSet = 0,
    /**
     * Deposit money into the account
     */
    Credit = 1,
    
    /**
     * Remove money from the account
     */
    Debit = 2,
    
    /**
     * A transfer from one account to another,
     * where money is coming in
     */
    TransferCredit = 3,
    
    
    /**
     * A transfer from one account to another,
     * where money is going out
     */
    TransferDebit = 4,
    
    /**
     * Paying a bank fee. This is a fee paid to the same in
     */
    Fee = 5
}

export interface ITransaction {
    
    /**
     * The ID of this transaction
     */
    id: string;
    
    /**
     * The type of transaction
     */
    type: TransactionType;
    
    /**
     * The recipient of this transaction
     */
    payee?: string;
    
    /**
     * The ID of the payee for this transaction
     */
    payeeId?:string;
    
    /**
     * The ID of the bank account that this transaction originates on
     */
    account: string;
    
    /**
     * The time that this transaction occured
     */
    date: Date;
    
    /**
     * The amount of the transaction, described
     */
    memo: ITransactionMemoRecord[];
    
    /**
     * The other transaction which goes with this one
     */
    pair?: string;
    
    /**
     * The total amount credited or debited
     */
    totalAmount: number;
}

export interface ITransactionRecord extends ITransaction, TypedRecord<ITransaction, ITransactionRecord> {
    
}


export interface ITransactionMemo {
    
    /**
     * The transaction which owns this sub-transaction
     */
    transactionId: string;
    
    /**
     * A memo of this transaction
     */
    memo: string;
    
    /**
     * Whether or not the transaction is income (sourced from a job, a friend, etc.)
     */
    isIncome: boolean;
    
    /**
     * The key of the budget category for this sub-transaction
     */
    budgetCategory: string;
    
    /**
     * The amount of this sub transaction
     */
    amount: number;
}
export interface ITransactionMemoRecord extends ITransactionMemo, TypedRecord<ITransactionMemo, ITransactionMemoRecord> {
}


const defaultTransactionMemo : ITransactionMemo = {
    
    /**
     * The transaction which owns this sub-transaction
     */
    transactionId: '',
    
    /**
     * A memo of this transaction
     */
    memo: null,
    
    /**
     * Whether or not the transaction is income (sourced from a job, a friend, etc.)
     */
    isIncome: null,
    
    /**
     * The key of the budget category for this sub-transaction
     */
    budgetCategory: '',
    
    /**
     * The amount of this sub transaction
     */
    amount: null
}

export const TransactionMemo  = Record(defaultTransactionMemo, 'TransactionMemo') as any as ITransactionMemoRecord;

const defaultTransaction: ITransaction = {
    id:'',
    type:TransactionType.NotSet,
    account:null,
    date: null,
    memo: [new TransactionMemo()],
    pair: null,
    totalAmount: null
};
export const Transaction : ITransactionRecord = Record(defaultTransaction, 'Transaction') as any as ITransactionRecord;
