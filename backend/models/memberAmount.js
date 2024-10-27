import mongoose from 'mongoose'

const MemberAmountSchema = new mongoose.Schema({
    member: {type:Number},
})

const MemberAmountModel = mongoose.model("memberamount", MemberAmountSchema)

export default MemberAmountModel