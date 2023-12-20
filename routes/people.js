const express = require('express')
const router = express.Router()
let { people } = require('../data')
const {
    getPeople,
    creatPerson,
    updatePerson,
    deletePerson
} = require('../controllers/people')
router.get('/', getPeople)
router.post('/', creatPerson)
router.put('/:id', updatePerson)
router.delete('/:id', deletePerson);
module.exports = router