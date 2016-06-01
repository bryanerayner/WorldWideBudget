import {ActionReducer, Action} from '@ngrx/store';

import {
    ITransactionStateRecord,
    Transaction,
    ITransactionRecord
} from '../models/index';

export const ADD_TRANSACTION = 'ADD_TRANSACTION';
export const UPDATE_TRANSACTION = 'UPDATE_TRANSACTION';
export const DELETE_TRANSACTION = 'DELETE_TRANSACTION';

export interface AddTransactionActionPayload {
    transaction: ITransactionRecord;
}


const addTransaction:ActionReducer<ITransactionStateRecord> = (state: ITransactionStateRecord, action:Action)=>{
    let ret = state;
    if (action.type === ADD_TRANSACTION){
        let payload: AddTransactionActionPayload = action.payload;
        let {
            transaction
        } = payload;
        if (transaction && transaction.id) {
            ret = state.setIn(['transactions', transaction.id], transaction);
        }
    }
    return ret;
};
const updateTransaction:ActionReducer<ITransactionStateRecord> = (state: ITransactionStateRecord, action:Action)=>{
    if (action.type === UPDATE_TRANSACTION){
        
    }
    return state;
};
const deleteTransaction:ActionReducer<ITransactionStateRecord> = (state: ITransactionStateRecord, action:Action)=>{
    if (action.type === DELETE_TRANSACTION){
        
    }
    return state;
};


export const transactions: ActionReducer<ITransactionStateRecord> = (state: ITransactionStateRecord, action: Action ): ITransactionStateRecord => {
    
    switch (action.type){
        case ADD_TRANSACTION:
        return addTransaction(state, action);
        
        case UPDATE_TRANSACTION:
        return updateTransaction(state, action);
        
        case DELETE_TRANSACTION:
        return deleteTransaction(state, action);
    }
    
    return state;
}