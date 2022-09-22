import mongoose from 'mongoose'

const memberSchema = mongoose.Schema({
    id: Number,
    name: String, 
    fullName : String, 
    birthday : String, 
    path : String,
    gender : String, 
    surgeries:[{
                date: Number, 
                description:String,
                complications: String,
            }],
    medications: String, 
    recreational_drugs: String,
    alcohol_intake: String,
    tobacco: String,
    medical_history: [ String], 
    locations: [{
            id: Number, 
            title: String,
            address: String,
            image: String,
    }]
})

const MemberDetails = mongoose.model('MemberDetails', memberSchema)

export default MemberDetails