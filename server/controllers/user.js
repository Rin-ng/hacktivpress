const User = require("../models/user")
const jwt = require("jsonwebtoken")

exports.signUp = function(req,res){
    let {name, username, password} = req.body;

    User.create({
        name,
        username,
        password
    })
    .then(function(response){
        res.status(200)
        .json("User has successfully registered")
    })
    .catch(function(err){
        res.status(409)
        .json(err.message);
    })
}

exports.signIn = function(req,res){
    let {username, password} = req.body;

    User.findOne({
        username: username
    })
    .then(function(user){
        user.comparePassword(password, function(err, isMatch){
            if(err){
                res.status(409)
                .json("Error comparing password")
            }

            else{
                if(isMatch){
                    let token = jwt.sign({
                        id: user._id
                    }, process.env.secretKey);

                    res.status(200)
                    .json({
                        token: token,
                        user: user
                    })

                }
                else{
                    res.status(409)
                    .json({
                        message: "Wrong password"
                    })
                }



            }
        })
    })
    .catch(function(err){
        res.status(409)
        .json({
            message: "Username not found"
        })
    })
}