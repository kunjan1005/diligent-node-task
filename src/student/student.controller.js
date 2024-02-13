const express=require('express')
const { StudentService } = require('./student.service')
const route=express.Router()
const studentService=new StudentService()
//add student route
route.post('addStudent',async (req,res)=>{
      const response=await studentService.addStudent(req.body)
      return res.status(response.statusCode).json(response)
})

//student routes
module.exports.studentRoute=route