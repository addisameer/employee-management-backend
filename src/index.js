import { connectDb } from "./db/index.js";
import { app } from "./app.js";

connectDb()
.then(()=>{
    app.listen(process.env.PORT || 8000 ,(req,res)=>{
        console.log(`server is listening on the port : ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("Db connection failed",err);
})