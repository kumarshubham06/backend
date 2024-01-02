import { RUNNING_STATUS } from "../config/index.js";
import customErrHandler from "./customError.js";

const errorHandler = (err, req, res, next) => {
    let status = 500;
    let data = {
        sucess: false,
        message: "Internal Server Error",
        ...(RUNNING_STATUS === "DEVELOPMENT_MODE" && { origError: err.message })
    };

    if (err instanceof customErrHandler) {
        status = err.status;
        data = {
            ...data,
            message: err.message,
        }
    }

    res.status(status).json(data)
}
export default errorHandler