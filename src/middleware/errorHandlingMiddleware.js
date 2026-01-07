

class ErrorHandlingMiddleware {
    errorHandling = async (err, req, res, next) => {
        res.status(404).json(err.message)
    }
}

export const errorHandlingMiddleware = new ErrorHandlingMiddleware();