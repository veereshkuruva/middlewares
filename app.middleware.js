const bcrypt = require('bcrypt');
const changeData =(req,res,next)=>{

    console.log("middleware 1")
    // res.send("middlewrae 1")
   next();
  

}
const changeData2 =(req,res,next)=>{

    console.log("middleware 2")
  
  next()

}

const encryptpassword=(req,res,next)=>{

    console.log(req.body)
    const password =req.body.password

    bcrypt.hash(password, 10, function(err, hash) {
        // Store hash in your password DB.
        if(err){
            res.send("password not encoded")
        }
        else{
            req.body.password =hash,
           req.body.shiva="key added",
            


            next()
        }
     
    });



}
const routesLevel=(req,res,next)=>{
    console.log("this routeslevel middleware ---")
    next();
}
const appLevel=(req,res,next)=>{
    console.log("thisapplevel middleware----")
}

module.exports={
    changeData:changeData,
    changeData2:changeData2,
    encryptpassword:encryptpassword,
    routesLevel:routesLevel,
    appLevel:appLevel

}
