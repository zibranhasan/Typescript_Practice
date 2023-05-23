
const RRollnumbers: string[] = ["hello", "hi", "WhatsApp"]
const RollNumbers: Array<number> = [44, 12,4];

const rollNumberss : Array<string> = ["hello", "hi", "WhatsApp"]


const rollNumbersss: Array<boolean> = [true, false];

type generic<T> = Array<T>;

type NameRollType = { name: string, roll: number}


const userNameAndNumbers: Array<NameRollType> = [
    {
        name: "Mr. X",
        roll:1,
    },
    {
        name: "Mr. y",
        roll:2,
    },
    {
        name: "Mr. z",
        roll:3,
    },
]


type genericTuple <x, y> = [x,y];


const relation : genericTuple<string, string>=["persian", "habijabi"]



const relationWithSalary: genericTuple<{name:string, salary:number}, string> = [
    {
        name: "persian",
        salary: 10000
    },
    "hiii"
]

interface relationWithSalaryInterface {
    name: string;
    salary: number

}

const relationWithSalaryy: genericTuple<relationWithSalaryInterface, string> = [
    {
        name: "persian",
        salary: 10000
    },
    "hiii"
]


//generic interface

interface CrushInterface<T> {
    name: string;
    husband: T
}

const crush1: CrushInterface<boolean> = {
    name: "kate winsler",
    husband:true
}

const crush2: CrushInterface<string> = {
    name: "kate",
    husband: "persian"

}

interface HusbandInterface {
    name: string,
    salary: number;
}

const crush3: CrushInterface<HusbandInterface> = {
    name: "kate",
    husband: {
        name: "persian",
        salary: 10
    }
}


