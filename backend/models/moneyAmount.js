import mongoose from 'mongoose'

const MoneyAmountSchema = new mongoose.Schema({
    amount: {type:Number},
})

const MoneyAmountModel = mongoose.model("moneyamount", MoneyAmountSchema)

export default MoneyAmountModel