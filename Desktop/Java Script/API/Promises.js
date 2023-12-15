new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log('Async task is complete');    
        resolve()  
    }, 1000);

}).then(function()
{
    console.log("task complete")
})
const promiseTwo = new Promise(function(resolve,reject)
{
    setTimeout(() => {
        

        resolve({username:"kanan" , city:"amreli"})
    }, 1000);
   
})
promiseTwo.then(function(user)
{
    console.log(user)
})

const promiseTree = new Promise(function(resolve,reject){
     
    setTimeout(()=>{
        let error=false;
        if(!error)
        {
            resolve({username:'manan', id:"123"})
        }
        else
        {
            console.log("ERROR:Something went wrong")
        }
        
    },1000)
})
promiseTree.then((user)=>{
    console.log(user)
    return user
    
})
.then((user)=>
{
    console.log(user.username)
    console.log(user.id)
})

.catch((ERROR)=>{
    console.log(ERROR)
})
const promisefour = new Promise(function(resolve,reject){
     
    setTimeout(()=>{
        let error=true ;
        if(!error)
        {
            resolve({username:'pathan', id:"234"})
        }
        else
        {
            console.log("ERROR:Something went wrong")
        }
        
    },1000)
})
async function consumeData(){
    try
    {
        const response = await promisefour
        console.log("successfully resolved")
    }
    catch(error)
    {
        console.log(error)
    }
}
consumeData()