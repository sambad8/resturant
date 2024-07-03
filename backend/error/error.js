// Define ErrorHandler class
class ErrorHandler extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}

// Define errorMiddleware function
export const errorMiddleware = (err, req, res, next) => {
    err.message = err.message || "Internal Server Error";
    err.statusCode = err.statusCode || 500;
    
    return res.status(err.statusCode).json({
        success: false,
        message: err.message,
    });
};

// Export ErrorHandler class as default
export default ErrorHandler;
