const express = require('express');
const app = express();
const path=require('path')
const PORT = process.env.PORT ||4000

const api_routes = require('./routes/routes_api.js')
const navigation=require('./routes/navigation_routes.js')
app.use(express.static('./public'))
// app.use(express.json())
// app.use(express.urlencoded({extended:false}))

app.use('/',api_routes)
 app.use('/notes',navigation)

app.listen(PORT, () => {
    console.log(`the server has started on http://localhost:${PORT}/`)
})