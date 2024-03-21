import express from 'express';
import adminRoutes from './controllers/index.js'
import './dbConnect.js'

const port=3005;
const app=express();
app.use(express.json());

app.use('/api/admin',adminRoutes)

app.listen(port,()=>{
    console.log("server is running at port",port)
})