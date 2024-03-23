import express from 'express';
import config from 'config';

// import cors from 'cors';

import adminRoutes from './controllers/index.js'
import './dbConnect.js'


const port = config.get('port');

console.log(port)
const app=express();
// app.use(cors())
app.use(express.json());

app.use('/api/admin',adminRoutes)

app.listen(port,()=>{
    console.log("server is running at port",port)
})