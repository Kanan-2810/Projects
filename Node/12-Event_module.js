const event=require('events')

const customEmitter = new event()

customEmitter.on('response',(name,age)=>
{
    console.log(`data is recived:name is:${name} and age is:${age}`)
})
customEmitter.emit('response','kanan',32)