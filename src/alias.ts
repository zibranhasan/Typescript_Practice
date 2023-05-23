
type OpertionType = (x:number, y:number) => number;


const calculate = (
    number1: number,
    number2: number,
    operation: OpertionType
) => {
    return operation(number1, number2);
}

calculate(10, 20, (x,y) => x+y)