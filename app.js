const express = require("express");
const route = require('./route');
const port = 3000
const app = express()

app.use(express.json());
app.use(route)

app.listen(port, ()=>{
    console.log("The server is running on port 3000");
})