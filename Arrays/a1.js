

// const arr=[6]
// arr.push("k","a","n","d")
// const map = arr.keys()
// for(const key of map)
// {
//     console.log(`${key}: ${arr[key]}`);

// }
// console.log(arr.length);
// const reve = arr.reverse()
// console.log(reve);

// const list = ["kanan","namra","hiti"]
// const id = document.getElementById("id")
// for(const letttr of list)
// {
//     const li= document.createElement("li")
//     li.textContent=letttr
//     id.appendChild(li)
// }
//  str = 'kanan';
// console.log('str: ', str);
// str[0]="M";
// console.log('str: ', str[0]);

// let arr=[1,2,3,4]
// console.log('arr: ', arr[0]);
// arr[0]=8
// console.log('arr: ', arr[0]);

// let arr= [250,645,300,900,50]

// for(let i=0; i<arr.length; i++)
// {
//     let temp = arr[i]/10
//     arr[i]=arr[i]-temp;
// }
// console.log('arr[i]: ', arr);
// const square = (num)=>
// {
//     console.log(num*num);
// }
// arr.forEach(square)
// const arr=[1,2,3,4,5]
// let abc=arr.map((value)=>
// {
//     value=value*2
//     return value
// })
// console.log('abc: ', abc);
const lab=document.createElement("label")
lab.innerText="enter the discription:";
const box=document.createElement("textarea")
const btn = document.createElement("button")
btn.innerText = "click me!"
btn.style.color = "white";
btn.style.backgroundColor = "red";
document.querySelector("body").prepend(btn);
document.querySelector("body").prepend(" ",box);
document.querySelector("body").prepend(lab);