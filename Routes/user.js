
const userModel= require("../Models/user");
const express= require("express")
const router= express.Router();




// post api
router.post("/add", async(req, res)=>{
      
    try {
        const User= await userModel.create(req.body);
        res.status(200).json({code :200, Massage:"User Added Successfully !", data:User})
        
    } catch (error) {
        res.status(400).json({code:400, Error:error, status:"User already added"})
    }
})


router.get('/userList', async(req, res)=>{
    try {
        const User = await userModel.find().sort({ _id: -1 });
        res.status(200).json({code:200, data:User, status:"User list fetch successfully"})


    } catch (error) {
      res.status(400).json({code:400, Error:error, status:"Unable to fetch User List" })  
    }
})


//get by id

router.get("/:id", async(req,res)=>{
    const {id}= req.params
    try {


        const singleUser= await userModel.findById({_id:id})
        console.log(singleUser)
        res.status(200).json({code:200, data:singleUser, status:"User fetch successfully"})
    } catch (error) {
        res.status(500).json({code:400, Error:error, status:"internal server error"}) 
    }
})

router.delete("/:id", async(req,res)=>{
    const {id}= req.params
    try {


        const singleUser= await userModel.findByIdAndDelete({_id:id})
       
        res.status(200).json({code:200, status:"User deleted successfully"})
    } catch (error) {
        res.status(500).json({code:400, Error:error, status:"Unable to delete"}) 
    }
})

router.patch("/update/:id",async (req, res)=>{
    const {id}= req.params
    try {
    console.log(id,">>")
        
        const update= await userModel.findByIdAndUpdate(id, req.body, {new:true})
        res.status(200).json({code :200, data:update, status:"User updated successfully"})
    } catch (error) {
        res.status(500).json({code:500, Error:error, status:"INTERNAL SERVER ERROR"}) 
    }
})

module.exports =router