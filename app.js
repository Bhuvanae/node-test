const express = require('express')
const app = express()

app.get('/test',(req,res)=>{
    return res.send("express working success fully")
})

app.listen('3000',()=>{
    console.log("connected successfully")
})