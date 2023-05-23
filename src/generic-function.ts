


//Arrow Function
const createArray = <T>(param: T): T[] => {
    return [param];
}

const result = createArray('Bangladesh')



const createArray1 = (param: string): string[] => {
    return [param];
}

const result1 = createArray('Bangladesh');

type Name = { name: string};

const result2 = createArray<Name>({name: "Bnagladesh"});


//double generic types problem

const createArray4 = <X,Y>(param1: X, param2: Y): [X,Y] => {
    return [param1, param2];
}

const result4 = createArray4<string, string>("bangladesh", "I love my country")




//spread operator 

const crush = "Kate Winsler";
const myInfo = {
    name: "persian",
    age: 100,
    salary: 100000
};
const newData = {...myInfo, crush}

console.log(newData);

//spread operator with f^n

// const addMeInMyCrushMind = <T>(myInfo: T) => {
//     const crush = "kate winsler";
//     const newData5 = {...myInfo, crush};
//     return newData5;
// }

// const myInfo2 = {
//     name: "Persina",
//     age: 100,
//     salary: 10000
// };
// const result5 = addMeInMyCrushMind(myInfo2);
