

export enum CredentialsProvider {
    Google,
    EmailPassword
}

export interface AccountCredential {
    provider: CredentialsProvider;
    id: string;
    key: string; 
    password: string;
}


export interface UserAccount {
    
    username: string;
    
    firstName:string;
    
    lastName: string;
        
    credentials: AccountCredential[];
}