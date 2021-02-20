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
