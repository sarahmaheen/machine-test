import express from 'express';
import EmployeeModel from '../models/Usermodels.js';
import AdminModel from '../models/Adminmodels.js';
const router = express.Router();
router.post('/createEmployee', async(req,res)=>{
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
        res.status(500).json({error:'Internal server error'})
    }
})

router.post('/login',async(req,res)=>{
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
        res.status(200).json({success:'Admin logged in successfully'})
       }
    } catch (error) {
        res.status(500).json({error:'Internal server error'})
    }
})

export default router