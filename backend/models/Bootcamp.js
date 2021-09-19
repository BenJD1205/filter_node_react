const mongoose = require('mongoose')

const bootcampSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Please provide a name to the bootcamp'],
        unique:true
    },
    rating:{
        type:Number,
        required:[true, 'Please provide a rating to the bootcamp'],
    },
    description:{
        type:String,
        required:[true, 'Please provide bootcamp width description'],
    },
    price:{
        type:Number,
        required:[true,'Please provide by id route']
    }
})

const Bootcamp = mongoose.model('Bootcamp',bootcampSchema)

module.exports = Bootcamp;