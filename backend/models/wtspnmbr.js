import mongoose from 'mongoose'

const WtspnmberSchema = new mongoose.Schema({
    number: {type:String},
})

const WtspnmberModel = mongoose.model("wtspnmbr", WtspnmberSchema)

export default WtspnmberModel