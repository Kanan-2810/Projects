const butttons=document.querySelectorAll('.colors')
const body=document.querySelector('body')
butttons.forEach(function(button)
{
    console.log(button);
    button.addEventListener('click',function(e) {
        console.log(e);
        console.log(e.target);
        body.style.backgroundColor=e.target.id;
    });
});