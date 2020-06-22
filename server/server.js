const express=require("express");
const bodyParser=require("body-parser");
const cors=require("cors");


const app=express();
app.use(bodyParser.json());
app.use(cors());
app.get("/",function(req,res){
res.send("connected to server");
});
app.post("/login",function(req,res){
  const email="test@gmail.com";
  const password="test";
  res.send({email:email,password:password});
});


app.listen(3000,function(){
  console.log("Server running on port 3000");
});
