//config .env file 
const dotenv=require('dotenv')
dotenv.config()
//other modules
const express=require('express')
const { studentRoute } = require('./student/student.controller')
require('./database/connection')
require('../src/models/association')


//create application 
const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
//route middleware
app.use('/student/',studentRoute)

const port=process.env.PORT
//listing to server
app.listen(port,()=>{
    console.log(`Server is running on: ${port}`)
})