const express= require("express")
const multer=require("multer")
const app=express()
app.use(express.json())


const upload=multer({
    storage:multer.diskStorage({

        destination:function(req,file,cb){

            cb(null,"uploads")
        },

        filename:function(req,file,cb){
            cb(null,file.fieldname+"."+"png")
        }
    })
}).single("user_file")


app.post("/up",upload,(req,res)=>{

    res.send("file_upload")
})


app.listen(5000,()=>{
    console.log("app is listening at port 5000")
})