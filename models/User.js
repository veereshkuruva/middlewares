const mongoose=require('mongoose')

const Userchema =new mongoose.Schema({
    username:{
        type:String
    },
   
    password:{
        type:String
    },
})
module.exports=mongoose.model("user",Userchema)