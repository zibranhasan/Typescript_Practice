type User = {
    name: string;
    age: number;
};

interface IUser {
    name: string;
    age: number;
}

const userwithTypeAlias: User={
    name: 'Type Alias',
    age : 100
}

const userwithInterface: IUser={
    name: 'zibran',
    age:24
}


interface extendedUser extends IUser {
    role:string;
}

const user: extendedUser = {name: 'zibran',age: 23,role: 'unknown'}


//object, function, Array

type addNumbersType = (num1:number, num2: number) => number;

interface Iaddnumbers {
    (num1: number, num2: number): number;
}

const addNumbera: Iaddnumbers = (num1, num2) => num1 + num2;



type rollNumbersType = number[];

interface IRollNumbers{
    [index:number]:number

    


}

const rollNumbers: IRollNumbers = [1, 4, 5];