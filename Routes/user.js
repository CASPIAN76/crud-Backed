
const userModel= require("../Models/user");
const express= require("express")
const router= express.Router();




// post api
router.post("/add", async(req, res)=>{
    
    try {
        const User= await userModel.create(req.body);
        res.status(200).json({code :200, Massage:"User Added Successfully !", data:User})
        
    } catch (error) {
        res.status(400).json({code:400, Error:error, status:"Unable to add"})
    }
})


router.get('/userList', async(req, res)=>{
    try {
        const User = await userModel.find();
        res.status(200).json({code:200, data:User, status:"User list fetch successfully"})


    } catch (error) {
      res.status(400).json({code:400, Error:error, status:"Unable to fetch User List" })  
    }
})

module.exports =router