import express from 'express';
import jwt from 'jsonwebtoken'
import EmployeeModel from '../models/Usermodels.js';
import { createEmployeeValidations,adminLoginValidations , errorMiddleware} from '../middleware/validators/index.js';
import AdminModel from '../models/Adminmodels.js';
const router = express.Router();
router.post('/createEmployee',async(req,res)=>{
    try {
        let{name,email,mobileNumber,designation,gender,course,imgUrl}=req.body;
        let findEmployee = await EmployeeModel.findOne({email})
        if(findEmployee){
            res.status(400).json({error:'Employee email already exists!'})
            return
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
       let findAdmin = await AdminModel.findOne({email,password})
       if(!findAdmin){
           res.status(404).json({error:'Email not found'})
        return 
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


router.put('/edit/:id',async(req,res)=>{
    try {
        let employeeId = req.params.id
        let find = await EmployeeModel.findById(employeeId)
        if(!find){
            res.status(404).json({error:'document not found'})
        }
        let updateData =req.body
        // await EmployeeModel.updateOne({_id:employeeId}),
        // {$set:updateData}
        await EmployeeModel.updateOne({ _id: employeeId }, { $set: updateData })

        let allData = await EmployeeModel.find({})
        res.status(200).json({success:'profile updated successfully',allData})

    } catch (error) {
        console.error(error)
        res.status(500).json({error:'Internal server error!'})
    }
})

router.delete('/delete/:id',async(req,res)=>{
    try {
        let employeeId=req.params.id
        await EmployeeModel.deleteOne({_id:employeeId})
        let allData = await EmployeeModel.find({})
        
        res.status(200).json({success:'profile deleted successfully',allData})
    } catch (error) {
        res.status(500).json({error:'Internal server error'})
    }
})


router.get('/employeeList',async(req,res)=>{
    try {
        let allData = await EmployeeModel.find({})
        res.status(200).json({success:'Employees listed successfully',allData})
    } catch (error) {
        res.status(500).json({error:'Internal server error'})
    }
})

router.get('/employee/:id', async (req, res) => {
    try {
        const employeeId = req.params.id;
        const employee = await EmployeeModel.findById(employeeId);
        if (!employee) {
            return res.status(404).json({ error: 'Employee not found' });
        }
        res.status(200).json(employee);
    } catch (error) {
        console.error('Error fetching employee:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});





export default router