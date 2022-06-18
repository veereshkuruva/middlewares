const express =require("express")

const route=express.Router()
const {changeData,changeData2,encryptpassword ,routesLevel,appLevel} =require("../app.middleware")
const { appcontroller,signupcontroller} =require("../controllres/app.controller")



route.use(routesLevel)
route.use(appLevel)
route.get("/",changeData,changeData2,appcontroller)
route.post("/",encryptpassword,signupcontroller)


module.exports={
    route:route
}