let {people} = require('../data')

const getPeople =(req, res) => {
    res.status(200).json({ success: true, data: people })

}
const creatPerson = (req, res) => {
    const { name } = req.body
    if (!name) {
        return res

        res.status(400).json({ success: false, msg: 'please provide a name' })
    }
    res.status(201).send(`Welcome ${name}`)

}
const updatePerson =(req, res) => {
    const { id } = req.params
    const { name } = req.body
    // console.log( people.people)
    const person = people.find((person) => person.id === parseInt(id))
    if (!person) {
        return res

        res.status(400).json({ success: false, msg: `No person with id ${id}` })
    }
    const newPeople = people.map((person) => {
        if (person.id === parseInt(id)) {
            person.name = name
        }
        return person
    })
    res.status(400).json({ success: true, data: newPeople })
}
const deletePerson = (req, res)=> {
    //const { id } = req.params;
    const person = people.find((person) => person.id === parseInt(req.params.id))
    if (!person) {
        return res
        .status(400).json({ success: false, msg: `No person with id ${id}` })
    }
    
    const deletePerson = people.filter((person)=>
        person.id !==parseInt(req.params.id)
    )
    return res.status(200).json({success:true,data:deletePerson})
}
module.exports={
    getPeople,
    creatPerson,
    updatePerson,
    deletePerson
}