const express=require('express')
const { TeacherService } = require('./teacher.service')
const route=express.Router()
const teacherService=new TeacherService()
//add teacher route
route.post('addTeacher',async (req,res)=>{
      const response=await teacherService.addTeacher(req.body)
      return res.status(response.statusCode).json(response)
})

//student routes
module.exports.studentRoute=route