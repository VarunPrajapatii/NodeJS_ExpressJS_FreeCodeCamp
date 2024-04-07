const authorize = (req, res, next) => {
    const {user} = req.query;
    if(user === "varun") {
        req.user = {name: "varun", id: 117}
        next();
    } else {
        res.status(401).send("Unauthorized");
    }
    
}

module.exports = authorize;