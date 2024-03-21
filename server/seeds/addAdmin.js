import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import AdminModel from "../models/Adminmodels.js";

import "../dbConnect.js";
import AdminModel from "../models/Adminmodels.js";
async function insertAdmin(){
    try {
        let admin ={
            email:"mainAdmin@gmail.com",
            password:"123#Admin"
        }
        admin.password=await bcrypt.hash(admin.password,12);
        let adminData = new AdminModel(admin);
        await adminData.save();
        console.log('Admin Added Successfully')
    } catch (error) {
        console.error(error)
    }
}