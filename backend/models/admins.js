import mongoose from 'mongoose'

const AdminsSchema = new mongoose.Schema({
    name: {type:String},
    email: {type:String},
    password: {type:String},
})

const AdminsModel = mongoose.model("admins", AdminsSchema)

export default AdminsModel