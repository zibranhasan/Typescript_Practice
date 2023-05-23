
const addMeInMyCrushMind = <T extends {name:string, age:number, salary:number}>(myInfo: T) => {
    const crush = "kate winsler";
    const newData5 = {...myInfo, crush};
    return newData5;
};

type MyInfoType = {
    name:string;
    age:number;
    salary:number
}

const myInfo2 : MyInfoType = {
    name: "Persian",
    age: 100,
    salary: 10000,
   

};
const result5 = addMeInMyCrushMind(myInfo2);
3