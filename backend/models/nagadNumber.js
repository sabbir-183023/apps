import mongoose from 'mongoose'

const NagadnumberSchema = new mongoose.Schema({
    number: {type:String},
})

const NagadnumberModel = mongoose.model("nagadnumber", NagadnumberSchema)

export default NagadnumberModel