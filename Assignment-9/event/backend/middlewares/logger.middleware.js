function logger(req, res, next){
    console.log("Log Message")
    next();
}

export default logger