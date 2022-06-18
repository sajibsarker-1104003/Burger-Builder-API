const express=require('express');
//Cross Origin Resource Sharing
const cors=require('cors');

const app=express();
app.use(cors());
app.use(express.json());

module.exports=app;

