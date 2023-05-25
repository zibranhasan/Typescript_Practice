//ekhane duita kaj krteci,public likha mane initialize ebong type duitai ekshate;
// class Animal {
//     constructor(
//         public name: string,
//         public species: string,
//         public sound: string
//     ) { }
//     public makeSound() {
//         console.log(`The ${this.name} says ${this.sound}`);
//     }
// }

// const dog = new Animal("German shepard", "dog", "ghew ghew");
//......................................................................


//nicher duita class er modde jegula common ace oigula niyei arekta class declare korte pari


class Parent {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
        //initialize korteci
        this.name = name;
        this.age = age;
        this.address = address;
    }

    makeSleep(hours:number):string{
        return `This ${this.name} will sleep for ${hours}`
    }
}





//prothom class(bangla system)
class student {
    // type declare korteci
    // name: string;
    // age: number;
    // address: string;

    // constructor(name: string, age: number, address: string) {
    //     //initialize korteci
    //     this.name = name;
    //     this.age = age;
    //     this.address = address;
    // }

    // //method declare korteci(function)

    // makeSleep(hours:number):string{
    //     return `This ${this.name} will sleep for ${hours}`
    // }

}
    //code repeat hobe bole ager code k niye asteci.........
    //ei j ager shompotti pai jacce etai ki inheritence na?........
    //just extend korlei kaj hoye jabe(kintu sheta susu type er junno) constructor thik e lagbe
    // super likhe initialize korlei hoye jabe

    //code hbe emn..........................
    // class student extends Parent {
    //     constructor(name: string, age: number, address: string){
    //         super(name, age, address)
    //     }
    // }


//maan dicci--->> const student1 = new student('Mr.x',15,'Uganda');


// arekta class declare korci-----------------------------------------
class Teacher{
    name: string;
    age:number;
    address: string;
    designation: string;//differnt

    constructor(name:string, age:number, address: string, designation:string){

        this.name = name;
        this.age = age;
        this.address = address;
        this.designation = designation;
    }
//method declare korteci.....................
makeSleep(hours:number):string{
    return `This ${this.name} will sleep for ${hours}`
}

//arekta method
takeClasses(numofClass: number): string{
    return `This ${this.name} will take ${numofClass} classes`// different
}
}

//Teacher er junno ki ki likha lagtece.......................>>>>

// class Teacher extends Parent {
//     designation: string

//     constructor(name: string, age:number, address: string, designation: string) {
//         super(name,age,address)
//         this.designation = designation;
//     }
//     takeClasses(numofClass: number): string {
//         return `This ${this.name} will take ${numofClass} class`;
//     }
// }
// const teacher1 = new Teacher('Mr.Y', 54, 'USA', 'Professor')
// teacher1.//ekhane name, address, age, designation pabo

