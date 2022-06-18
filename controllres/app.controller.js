const User =require("../models/User")
const appcontroller =(req,res,next)=>{

    res.send("hey from controller page")

}
const signupcontroller =(req,res,next)=>{
    const user =new User ({

        username:req.body.username,
        
        password:req.body.password

    })
    user.save().then(result=>{

        res.send("hey from signup page")
    })

    console.log(req.body)


}
module.exports={
    appcontroller:appcontroller,
    signupcontroller:signupcontroller
}