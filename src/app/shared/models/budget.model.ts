

export interface Budget {
    
    months: {[guid:string]:BudgetMonth;}
}

export interface CurrencyValue {
    [currencyCode:string]: number;
}

export interface BudgetMonth {
    guid:string;
    month: number;
    year: number;
    
    plan: MonthlyBudgetPlan;
    
    /**
     * Transactions that occured in the month
     */
    transactions: string[];
    
    /**
     * The amount of money available to spend for the month
     */
    totalAvailable: CurrencyValue;
    
    /**
     * The amount of money available for each budget category
     */
    budgetTotalAvailable: {
        [category:string]: CurrencyValue;
    }
}

export interface MonthlyBudgetPlan {
    budgetTargets: {[guid:string]:MonthlyBudgetTarget;}
}

export enum MonthlyBudgetRolloverStrategy
{
    ZeroBased,
    Accumulate
}

export interface MonthlyBudgetTarget {
    
    /**
     * The GUID
     */
    guid: string;
    
    /**
     * The category ID of the monthly budget target
     */
    category: string;
    
    /**
     * The allowed spending amount towards this monthly budget
     */
    amount:  CurrencyValue; 
    
    /**
     * Determine how monthly surplusses should be handled
     */
    surplusStrategy: MonthlyBudgetRolloverStrategy;
    
    /**
     * Determine how over spending is handled
     */
    negativeStrategy: MonthlyBudgetRolloverStrategy;
}

export interface BudgetCategory {
    /**
     * The ID of the budget category
     */
    guid: string;
    
    /**
     * The name of the category
     */
    name:string;
    
    /**
     * The parent ID if this is a sub-category
     */
    parent?:string;
    
    /**
     * What type of category is this?
     */
    categoryType?: BudgetCategoryType;
    
    /**
     * Whether or not the category is still active
     */
    state: BudgetCategoryState;
}

export enum BudgetCategoryState{
    Active,
    Retired
}

export enum BudgetCategoryType {
    MonthlyExpense,
    LongTermGoal,
    ShortTermGoal,
    EmergencyFund
}