const express = require("express");
const cors = require("cors");
const { connection } = require("./db")
const { cusRouter } = require("./routes/cus.routes")
const { noteRouter } = require("./routes/note.routes")
require("dotenv").config()
const port = process.env.PORT
const app = express()
app.use(cors())
app.use(express.json())
app.use("/cus",cusRouter)
app.use("/note",noteRouter)

app.get("/", (req,res) =>{
    res.send({
        message: "TEST API request"
    })
})

app.listen(port, async()=>{
    try{
        await connection
        console.log("database connected")
    }catch(error){
        console.log(error)
    }
    console.log("Server running on port",port)
})
