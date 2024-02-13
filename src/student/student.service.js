const { errorResponse, successResponse } = require("../global/response.handler")
const { errorStudentNameisrequired, errorClassIdisRequired, errorClassisNotExists, successStudentCreated, errorInternalError, errorStudentNotCreated } = require("../global/string")
const { Class } = require("../models/class.model")
const { Student } = require("../models/student.model")


//studnet class
module.exports.StudentService = class {
    constructor() { }
    // add student
    async addStudent(body) {
        try {
            if (!body.name) return errorResponse(errorStudentNameisrequired, 400)
            else if (!body.class_id) return errorResponse(errorClassIdisRequired, 400)
            //check class is exists or not
            const classOptions = { where: { id: class_id }, attributes: ['id'] }
            const checkClass = await Class.findOne(classOptions)
            if (!checkClass) return errorResponse(errorClassisNotExists, 400)
            //create student
            const createStudent = await Student.create(body)
            if (!createStudent) return errorResponse(errorStudentNotCreated,500)
            return successResponse(successStudentCreated, 201)
        } catch (error) {
            return errorResponse(errorInternalError, 500)
        }
    }
    
}