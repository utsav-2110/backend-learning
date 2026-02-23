class ApiResponse {
    constructor(statuscode, data, message = "suceess"){
        this.statuscode = statuscode
        this.data = data
        this.message = message
        this.success = statuscode < 400
    }
}