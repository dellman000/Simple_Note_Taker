const routers = require('express').Router()
const path=require('path')
const {v4:generateID} = require('uuid')
const fs =require('fs/promises')
    

async function getDB(){
    // reads and returns the database
        const db = await fs.readFile('./db/db.json','utf-8')
        return JSON.parse(db)
    } 



routers.get('/notes', async function (request, response) {
   // The Current Database 
    const currentDB= await getDB()
    response.send(currentDB)
 })


// adds an item to the database
routers.post('/notes/add', async function (request, response) {
   const incomming =request.body
   const currentDB= await getDB()
   incomming.id=generateID()
   currentDB.push(incomming)
  
   await fs.writeFile('./db/db.json',JSON.stringify(currentDB,null,2),'utf-8')
   response.send("item added")   
})
//removes an item from the database
routers.delete('/notes/remove/:note_id', async function (request, response) {
    const removeID = request.params.note_id
    const currentDB= await getDB()
    //filter based on id 
    const result = currentDB.filter((element)=>{
        return element.id != removeID
    })
    await fs.writeFile('./db/db.json',JSON.stringify(result,null,2),'utf-8') 
    response.send("incomming")
 })

module.exports=routers;