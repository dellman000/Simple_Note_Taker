const navigation = require('express').Router()
const path=require('path')
// const {v4:generateID} = require('uuid')
// const fs =require('fs/promises')

navigation.get('/', function (request, response) {
    response.sendFile(path.join(__dirname,'./public/index.html'))
})

navigation.get('/notes', function (request, response) {
    response.sendFile(path.join(__dirname,'../public/notes.html'))
})


module.exports= navigation
