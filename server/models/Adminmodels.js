import mongoose from "mongoose";
let adminSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
const AdminModel=mongoose.model('Admin',adminSchema);
export default AdminModel