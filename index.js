const express=require('express')
const multer=require("multer")

const app=express()

app.use(express.json())


const upload=multer({
 
  storage:multer.diskStorage({
      
    destination: function(req,file,cb){
      cb(null,"uploads")
    
      // uploads is the foalder in which file gets uploaded

    },
    filename :function(req,file,cb){
         cb(null,file.fieldname)
    }
  })

}).single("user_file")

app.post("/",upload,(req,res)=>{
   res.send("file uploaded")
})



app.listen(5000, function(){

  console.log("listening to port 5000");
})