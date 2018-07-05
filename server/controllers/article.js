const Article = require("../models/article")
const User = require("../models/user")
const jwt = require("jsonwebtoken")

exports.getAll = function(req,res){
    console.log("sini?")
    Article.find({})
    .populate("author", "name")
    .exec()
    .then(function(articles){
        res.status(200)
        .json({
            articles
        })
    })
    .catch(function(err){
        res.status(400)
        .json({
        message: err.message
        })
    })
}

exports.findByAuthor = function(req,res){
    let author = req.params.id;

    Article.find({
        author : author
    })
    .populate("author", "name")
    .exec()
    .then(function(articles){
        res.status(200)
        .json({
            message: "These are the articles created by " + articles[0].author.name,
            articles
        })
    })
    .catch(function(err){
        res.status(400)
        .json({
            message: err.message
        })
    })
}

exports.findByCategory = function(req,res){
    
    let {category} = req.query;

    Article.find({
        category : category
    })
    .populate("author", "name")
    .exec()
    .then(function(articles){
        res.status(200)
        .json({
            message: "These are the articles with the category " + articles[0].category,
            articles
        })
    })
    .catch(function(err){
        res.status(400)
        .json({
            message: err.message
        })
    })
}

exports.createNew = function(req,res){
    let {title, content, category} = req.body;
    let author = req.decoded.id;

    Article.create({
        title,
        content,
        category, 
        author
    })
    .then(function(response){
        Article.find({
            author : req.decoded.id
        })
        .populate("author", "name")
        .exec()
        .then(function(articles){
            res.status(200)
            .json({
                message: "Article has been successfully created",
                articles
            })
        })
        .catch(function(err){
            res.status(400)
            .json({
                message: err.message
            })
        })
    })
    .catch(function(err){
        res.status(409)
        .json(err.message);
    })
}

exports.update = function(req,res){
    let {id} = req.params;
    let updatedData = {
        title: req.body.title,
        content: req.body.content,
        category: req.body.category
    }

    Article.findById({
        _id: id
    })
    .populate("author", "name")
    .exec()
    .then(function(article){
        article.title = updatedData.title;
        article.content = updatedData.content;
        article.category = updatedData.category;
        article.updatedAt = new Date();
        article.save()
        .then(function(){
            Article.find({})
            .then(function(updated){
                res.status(200)
                .json({
                    message: "Article has been successfully updated",
                    updated
                })
            })
            .catch(function(err){
                res.status(400)
                .json({
                message: err.message
                })
            })
        })
        .catch(function(err){
            res.status(409)
            .json({
                message: err.message
            })
        })
    })
    .catch(function(err){
        res.status(409)
        .json(err.message);
    })
}

exports.dalete = function(req,res){
    let {id} = req.params;

    Article.deleteOne({
        _id: id
    })
    .then(function(article){

        Article.find({})
        .then(function(updated){
            res.status(200)
            .json({
                message: "Article has been successfully deleted",
                updated
            })
        })
        .catch(function(err){
            res.status(400)
            .json({
            message: err.message
            })
        })
    })
    .catch(function(err){
        res.status(409)
        .json({
            message: err.message
        })
    })
    .catch(function(err){
        res.status(409)
        .json(err.message);
    })
}