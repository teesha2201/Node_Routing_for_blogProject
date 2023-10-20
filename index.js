const express = require("express");
const app = express();
const port = 9000
const BlogRouting = require("./Routing/routingApi")
// const {authentication} = require("./Middleware/authentication")
const cors = require('cors')

app.use(cors({
    origin:"*" 
}))

// app.use(authentication)
app.use("/api/main",BlogRouting)



app.get("/",(req,res)=>{
    res.send("Server is Running ")
})
app.listen(port,()=>{
    try{
        console.log(`Server is live on port no. ${port}`)
    }
    catch(err){
        console.log(`Server is live not live due to error ${err} on port no. ${port}`)
    }
})