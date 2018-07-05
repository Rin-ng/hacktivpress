const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
const SALT_FACTOR = 10;

const userSchema = new Schema({
    name:{
        type: String,
        required: "Please input name",

    },
    username:{
        type: String,
        required: "Please input username",
        unique: true
    },
    password:{
        type: String,
        required:"Please input password",
        validate:{
            validator: function(value){
                let validate = "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$"
                return validate.test(value)
            },
            message: "Password needs to be at least 6 characters long and include 1 number"
        }
    }
},{timestamps: true})

userSchema.pre("save", function(next){
    var user = this;

    if(!user.isModified('password')) return next();

    bcrypt.genSalt(SALT_FACTOR, function(err, salt){
        if(err) return next(err);

        bcrypt.hash(user.password, salt, function(err, hash){
            if(err) return next(err);

            user.password = hash;
            next();
        })
    })
   
})


UserSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};


const User = mongoose.model("Users",userSchema);
module.exports = User;
