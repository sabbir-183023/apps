import mongoose from 'mongoose'

const BkashnumberSchema = new mongoose.Schema({
    number: {type:String},
})

const BkashnumberModel = mongoose.model("bkashnumber", BkashnumberSchema)

export default BkashnumberModel