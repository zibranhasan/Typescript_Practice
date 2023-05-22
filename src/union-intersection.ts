const searchName = (value: string) => {
    if(value === null){
        console.log("There is nothing to search");
    }
    else{
        console.log("Searching.......");
    }
};

searchName("rahim")



const getMyCarSpeed = (speed: unknown) => {
    if(typeof speed === "number"){
        const convertedSpeed = (speed * 1000)/3600;
        console.log(`My speed is ${convertedSpeed}`);
    }
    if(typeof speed === "string"){
       const [value, unit] = speed.split(" "); //["10", "kmh-1"]

       const convertedSpeed = (parseFloat(value) * 1000) / 3600;
       console.log(`My speed is ${convertedSpeed}`);

    }
    else{
        console.log("There is wrong type");
    }
};

getMyCarSpeed(10);
getMyCarSpeed("10 kmh^-1")
