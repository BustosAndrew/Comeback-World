/**
 * A Response Data Transfer Object Class
 *
 * if request is successful:
 *  return ResponseDTO object
 *      success: true
 *      data: data requested
 *
 * if request is not successful
 *  return ResponseDTO object
 *      sccess: false
 *      data: null
 *      message: array of error info messages
 */

class ResponseDTO {
    constructor(data, success, message = []) {
        this.success = success;
        this.data = data;
        this.timeStamp = Date.now();
        this.message = message;
        return this;
    }

    pushMessage(msg) {
        this.message.push(msg);
        return this;
    }
}

module.exports = ResponseDTO;
