

module.exports.successResponse = (message, statusCode = 200, data = null) => {
    return {
        message,
        statusCode,
        valid: true,
        data
    }
}
module.exports.errorResponse = (message, statusCode) => {
    return {
        message,
        statusCode,
        valid: false,
    }
}