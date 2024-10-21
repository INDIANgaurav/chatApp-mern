 
import express from "express";  
const app = express(); 
import dotenv from "dotenv"; 
import connectDB from "./config/database.js";
import userRoute from "./routes/userRoute.js";
 import cookieParser from "cookie-parser";
 import messageRoute from "./routes/messageRoutes.js";
dotenv.config({});

 
const PORT = process.env.PORT || 5000;

 app.use(cookieParser())
app.use(express.json()); 
 

// routes
app.use("/api/v1/user",userRoute); 
app.use("/api/v1/message",messageRoute);
 

app.listen(PORT, ()=>{
    connectDB();
    console.log(`Server listen at port ${PORT}`);
});

