let but1=document.getElementById('div1')
const button =document.getElementById('b1')
button.addEventListener('click',()=>{
    but1.innerHTML="you have chosen X"

})

const button2=document.getElementById('b2')
{
    button2.addEventListener('click',()=>{
        but1.innerHTML="you have chosen O"
    })
}
const row1=document.getElementById("row1").childNodes
const row2=document.getElementById("row2").childNodes
const row3=document.getElementById("row3").childNodes

row1.forEach((box)=>{
    box.addEventListener('click',()=>{
        checkbox(box)
    })
})

row2.forEach((box)=>{
    box.addEventListener('click',()=>{
        checkbox(box)
    })
})
row3.forEach((box)=>{
    box.addEventListener('click',()=>{
        checkbox(box)
    })
})
function checkbox(box)
{
    if(box.innerText)
    {
      alert('No space exist')
    }
    else
    {
        
    }   
}