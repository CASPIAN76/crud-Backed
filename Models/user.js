const  mongoose = require("mongoose");


const UserSchema = new mongoose.Schema({

    fname:{ type:String,require:true   },
    lname:{type:String, require:true},
    email :{type:String, require:true, unique:true},
    age:{type:Number, require:true},
    city:{type:String, require:true},
    state:{type:String, require:true},
    dob:{type:Date, require:true},
    gender:{type:String, require:true}
  

}, {timestamps:true})

const User= mongoose.model("User", UserSchema);

module.exports=User