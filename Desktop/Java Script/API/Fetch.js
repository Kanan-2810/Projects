// function callback() {
//     const pr = new Promise((resolve,reject)=>{
//         let p = fetch("https://api.github.com/users/hiteshchoudhary")
//         .then((value) => {
//             return value.json()
//         })
//         .then((value1) => {
//             resolve(value1)
//         })
//         .catch((e)=>{
//             reject(e);
//         })
//     });

//     pr.then((res)=>{
//         console.log(res)
//         document.getElementById("bio").innerText = res.bio;
//         document.getElementById("name").innerText = res.name;
//         document.getElementById("follower").innerText = res.node_id;
//         document.getElementById("node").innerText = res.followers;


//     })
// }
const but1 = document.getElementById("b1");
but1.addEventListener('click', () => {
    callback();
})
async function callback()
{
    try{
    const asy = await fetch("https://api.github.com/users/hiteshchoudhary")

        const res = await asy.json();
        console.log(res)
        document.getElementById("bio").innerText = res.bio;
        document.getElementById("name").innerText = res.name;
        document.getElementById("follower").innerText = res.node_id;
        document.getElementById("node").innerText = res.followers;

    }
    
    catch(e)
    {
        console.log(e);
    }

}

