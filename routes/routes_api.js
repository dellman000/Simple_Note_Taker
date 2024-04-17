const router = require('express').Router()
const path=require('path')
// const {v4:generateID} = require('uuid')
// const fs =require('fs/promises')

router.get('/', function (request, response) {
    response.sendFile(path.join(__dirname,'./public/index.html'))
})

module.exports= router