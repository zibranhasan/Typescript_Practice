

//Mocking
const makePromise = () => {
   return new Promise((resolve, reject)=>{
        const data : string = 'Data is fetched'
        if(data){
            resolve(data)
        }
        else{
            reject('Failed to fetched data!')
        }
    })
  
}