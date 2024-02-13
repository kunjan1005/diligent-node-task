const { errorResponse, successResponse } = require("../global/response.handler")
const { errorInternalError,
    errorTeacherNameisRequired,
    errorTeacherNotCreated,
    successTeacherCreated } = require("../global/string")
const { Teacher } = require("../models/teacher.model")


//studnet class
module.exports.TeacherService = class {
    constructor() { }
    // add student
    async addTeacher(body) {
        try {
            if (!body.name) return errorResponse(errorTeacherNameisRequired, 400)
            //create teacher
            const createTeacher = await Teacher.create(body)
            if (!createTeacher) return errorResponse(errorTeacherNotCreated, 500)
            return successResponse(successTeacherCreated, 201)
        } catch (error) {
            return errorResponse(errorInternalError, 500)
        }
    }

}