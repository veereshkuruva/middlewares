const express =require("express")

const authroute=express.Router()

authroute.get ("/",(req,res)=>{
    res.send("hey im from Auth route")
})
authroute.get ("/hello",(req,res)=>{
    res.send("hey im from Auth hello route")
})

module.exports={
    authroute:authroute
}