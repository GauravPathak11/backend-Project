// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
import conectDB from "./db/index.js"


dotenv.config({
    path: './env'
})


conectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running ${process.env.PORT}`);
        
    })
})
.catch((error) =>{
    console.log(("MongoDB connection failed !!!",error));
    
})







/*
import express from "express"

const app = express()


;(async () =>{
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error) => {
            console.log("ERROR",error);
            throw error;
            
        })
        app.listen(process.env.PORT, () => {
            console.log(`app is listening on port ${process.env.PORT}`);
            
        })
    }
    catch(error){
        console.log("ERROR:",error);
        throw err
        
    }
})()

*/