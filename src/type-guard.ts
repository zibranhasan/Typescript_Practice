//keyof guard..........................>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//Bnagla
// function add(param1:string|number, param2:string|number){
//     if(typeof param1 =='number' && typeof param2 == 'number'){
//         return param1+param2
//     }
// }



//duita type j likhteci eta k ekta kore di
type Alphaneumerics = string|number
function add(param1:Alphaneumerics, param2:Alphaneumerics): Alphaneumerics{
        if(typeof param1 =='number' && typeof param2 == 'number'){//ekhane kintu ami guard toiri kore dici
            return param1+param2
        }
        else{
            return param1.toString() + param2.toString()
        }
    }

    //In guard(object er junno)

    type normalUserType = {
        name: string
    }
    type AdminUserType = {
        name: string;
        role: 'admin'
    }


  //ekta function er junno ei type k niye asteci//parameter er ekhane muloto orbect er kotha e bola hocce v.v.i
  function getUser(user:normalUserType|AdminUserType){
    //ekhn ekhane ami ekta guard diye dicci(condition)
    if('role' in user){
        return `I am an admin and my role is ${user.role}`
    }
    else{
        return `I am a normal user`
    }
  }

    const normalUser1: normalUserType = { name: 'Mr. Kallu'} //eta ki simple object destructuring er moto na?ottat ekpase type rakheci onno pase property name;
    const adminUser1: AdminUserType = {name:'gallu', role: 'admin'}


//function ta eiber call korbo(ermane asole ami object e pathai dicci)
console.log(getUser(normalUser1));


//<<<<<<<<<<<<Arek prokar er guard(eta class ebong object k guard kore).......>>>>>>>>>>>>>>>>>>>>>>>>

//Instanceof guard(et main ,eta thake aro toiri korbo)
class Animal{
    name:string;
    species: string;
    constructor(name: string, species: string){
        this.name = name;
        this.species = species
    }
    makeSound(){
        console.log('I am making sound');
    }
}


//sub class toiri kore dicci

class Dog extends Animal{
    constructor(name: string, species: string){
        super(name, species);
    }
    makeBark(){
        console.log('I am barking');
    }
}

// arekta class toiri korteci
class Cat extends Animal{
    constructor(name: string, species: string){
        super(name, species);
    }
    makeMeaw(){
        console.log('I am Meawing');
    }
}
//j object dilam she jdi dog er object er sathe combined hoy tahole ek rokom(ekhane etai guard)
//j object dilam she jdi cat er object er sathe combined hoy tahole ek rokom(ekhane etai guard)
function getAnimal(animal: Animal){
    if(animal instanceof Dog){
        animal.makeBark()
    }
    else if(animal instanceof Cat){
        animal.makeMeaw
    }
    else{
        animal.makeSound()
    }
}


const animal1 = new Dog('german','dog') //instance of dog
const animal2 = new Cat('persian', 'cat')//instace of cat

getAnimal(animal1)

