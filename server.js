const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

const {route} =require("../midware/routes/app.route")
const {authroute} =require("../midware/routes/auth.route")
app.use('/', route )



app.listen(port, () => {
  console.log(`Example app listening http://localhost:${port}`)
})

//three ways level middlewares
//1.route level
//2.routes-levels
//3/app level