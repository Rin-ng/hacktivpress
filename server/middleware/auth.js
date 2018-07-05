const jwt = require ("jsonwebtoken");
require ('dotenv').config();

exports.auth = function(req, res, next){
    jwt.verify(req.headers.token, process.env.secretKey, function(err, decoded){
        if(decoded){
            req.decoded = decoded;
            next()
        }
        else{
            res.status(403)
            .json({
                message: "Access is forbidden"
            })
        }
    });
}