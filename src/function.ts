//normal function
 function add(num1:number, num2:number):number{
   
   return num1+num2
 }


const addArrow = (num1:number,num2:number):number=> num1+num2;


const arr = [1,4,5];

const newArray = arr.map((indivitualArray:number) => (indivitualArray*indivitualArray))

add(2,2);



const person :
{
    name: string;
    balance:number;
    addBalance(money:number):void

}
= 
{
    name: "Zibran",
    balance: 5,
    addBalance(money){
        console.log(this.balance + money)
    }
}

function add2(num1:number = 10, num2:number): number {
    return num1 + num2
}


add2(20, 30);




//spread operator

const myFriends = ["asif", "tonmoy", "Arvy"];
const newFriends = ["sabit", "mehraj", "mahmud"];

myFriends.push(...newFriends);


//rest parameter
const greetFriends = (
    
...friend:string[]

): void => console.log(`Hi ${friend}\n Hi ${friend} \n Hi ${friend}`);

greetFriends("habib","tabib", "labib")


 //Array and Object destructuring

 const MyFriends = ["habib", "labib", "dabib"]

 const NewFriends = ["asif", "tasif", "masif"]

 const myBestFriend = {
    Mainname: 'Harifur Islam',
    age: 24
 }

 const [besty,sss] = MyFriends;


console.log(besty);


 const { Mainname } = myBestFriend
 