const Joi=require('joi');

const schema=Joi.object({
  email:Joi.string().min(5).max(255).required().email(),
  password:Joi.string().min(5).max(1024).required()
})

const user={
  email:"a@gmail.com",
  password:"1235"
}

const {error}=schema.validate(user);

console.log(error.details[0].message);


//for testing backend API

//sajibsarker0111@gmail.com=>token=> eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmFmMWY5ZDlhY2ExMmU4N2I5N2UxOTUiLCJlbWFpbCI6InNhamlic2Fya2VyMDExMUBnbWFpbC5jb20iLCJpYXQiOjE2NTU2NDQwNjEsImV4cCI6MTY1NTY1NDg2MX0.LNwFGT6mi_VjJIrVPR7Wxmjxfwuv_uVjEcvyUwyYX5w

// a@gmail.com=>token=>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmFmMjA2NTlhY2ExMmU4N2I5N2UxOTgiLCJlbWFpbCI6ImFAZ21haWwuY29tIiwiaWF0IjoxNjU1NjQ0MjYxLCJleHAiOjE2NTU2NTUwNjF9.3Ewz17ECF2ayZQ2SiEckgXOuUjz6JZc4pKPDR5Efydg  =>userId=>62af20659aca12e87b97e198