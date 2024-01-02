class customErrHandler extends Error {
    constructor(status, message) {
        super()

        this.status = status
        this.message = message
    }

    static NotFound(status, message) {
        return new customErrHandler(status, message)
    }

    static unAuthorized(status, message) {
        return new customErrHandler(status, message)
    }
}

export default customErrHandler