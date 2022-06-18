//install dotenv,morgan,express,joi,bcrypt,jsonwebtoken,lodash,cors

//Connect Mongodb

const dotenv=require("dotenv");
dotenv.config();
const app=require('./app');
const mongoose=require('mongoose');

mongoose.connect(process.env.MONGODB_SERVER)
.then(()=>console.log("Mongodb Connected Succesfully"))
.catch(err=>console.log("Mongodb Connection Failed"));

const port=process.env.PORT;
app.listen(port,()=>{
  console.log(`Listening on port ${port}`);
})



//Run server



