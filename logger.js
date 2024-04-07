const logger = (req, res, next) => {
    const path = req.url;
    const method = req.method;
    const date = new Date().getFullYear();
    console.log(method, path, date);
    next();
}

module.exports = logger;