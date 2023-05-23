let anything: any;

anything = "learning about assertion";

(anything as string).length;

type various = string | number |undefined

function KgToGram(param: string | number):various{
    if(typeof param === "string"){
        const value = parseFloat(param) * 1000;
        return `The converted result is: ${value} gram`;
    }
    if(typeof param == "number"){
        const value = param * 1000;
        return value;
    }

}

const resultToNumber = KgToGram(1000) as number;
const resultToString = KgToGram('1000') as string;



type customErrorType = {
    message: string
}
try{

}
catch(err){
    console.log((err as customErrorType).message);
}
