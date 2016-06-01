import {
    CurrencyCode
} from './currency.model';

export enum  BankAccountType {
    Checking,
    Savings,
    CreditCard,
    Cash,
    PayPal
}

export interface BankAccount {
    
    /**
     * The name of the bank account
     */
    name: string;
    
    /**
     * A GUID for the bank account
     */
    id: string;
    
    /**
     * The type of account
     */
    type: BankAccountType;
    
    /**
     * The currency of the bank account
     */
    currency: CurrencyCode;
    
    /**
     * A list of username's which own the account 
     */
    owners: string[];
}