import express from 'express';
import jwt from 'jsonwebtoken'
import EmployeeModel from '../models/Usermodels.js';
import { createEmployeeValidations,adminLoginValidations , errorMiddleware} from '../middleware/validators/index.js';
import AdminModel from '../models/Adminmodels.js';
const router = express.Router();
router.post('/createEmployee',createEmployeeValidations(), errorMiddleware,async(req,res)=>{
    try {
        let{name,email,mobileNumber,designation,gender,course,imgUrl}=req.body;
        let findEmployee = await EmployeeModel.findOne({email})
        if(findEmployee){
            res.status(400).json({error:'Employee email already exists!'})
        }
        let employeeData = {
            name,
            email,
            mobileNumber,
            designation,
            gender,
            course,
            imgUrl
        }
        let employeeDetails=new EmployeeModel(employeeData);
        await employeeDetails.save();
        res.status(200).json({success:'Employee registered successfully'})
    } catch (error) {
        console.error(error)
        res.status(500).json({error:'Internal server error'})
    }
})

router.post('/login',adminLoginValidations(), errorMiddleware, async(req,res)=>{
    try {
       let{
        email,
        password
       } = req.body
       let findAdmin = await AdminModel.find({email,password})
       if(!findAdmin){
        return res.status(404).json({error:'Email not found'})
       }else{
        let payload={
            email:req.body.email,
            role:findAdmin.role
        }
        let privatekey = 'machineTest';
        let token = jwt.sign(payload,privatekey,{expiresIn :'1d'})
        res.status(200).json({success:'Admin logged in successfully',token})
       }
    } catch (error) {
        console.error(error)
        res.status(500).json({error:'Internal server error'})
    }
})

export default router