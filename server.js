const express     =require("express")
const app         =express();
const bodyParser  = require("body-parser")
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");


app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
dotenv.config();

//route path
const UserRoutes=require("./Routes/user")

mongoose.connect(process.env.URL).then(()=>{
    app.listen(process.env.PORT ||4000 , (ERR)=>{
       if(ERR) console.log("CONNECTON ERROR");
        console.log("DATABASE CONNECTED...", process.env.PORT)
    })
}).catch((ERR)=>{
    console.log(ERR, "CATCH ERROR")
})


app.use("/api/user",UserRoutes )
