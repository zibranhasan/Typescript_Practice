class BankAccount {
    id:number;
    protected name: string;//bishes karone not very much
    private _balance:number;//modifier(access korte dicci na, within accessable)

    constructor(id:number, name: string, balance: number){
        this.id = id;
        this.name = name;
        this._balance = balance;
    }    
}

















const myAccount = new BankAccount(44, 'persina',20)