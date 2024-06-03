const errorMiddleware = (err,req,res,next)=>{
    const status  = err.status || 500;
    const message = err.message || "SERVER ERROR"
    const extrsDetails = err.extrsDetails ||"Internal Server Error";

    return res.status(status).json({message,extrsDetails})
}
module.exports = errorMiddleware;