import mongoose from 'mongoose'

const PaymentDetailsSchema = new mongoose.Schema({
    name: {type:String},
    mobile: {type:String},
    txnid: {type:String},
})

const PaymentDetailsModel = mongoose.model("paymentDetails", PaymentDetailsSchema)

export default PaymentDetailsModel