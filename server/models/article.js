const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title:{
        type: String,
        required: "Please input name",

    },
    content:{
        type: String,
        required: "Please input username",
    },
    category:{
        type: String,
    },
    author:{
        type: Schema.Types.ObjectId,
        ref:"User"
    }
},{timestamps: true})



const Article = mongoose.model("Articles",articleSchema);
module.exports = Article;
