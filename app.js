const express=require('express');

//Cross Origin Resource Sharing
const cors=require('cors');
const userRouter=require('./routers/userRouter');

const app=express();
app.use(cors());
app.use(express.json());

app.use('/user',userRouter);

module.exports=app;

