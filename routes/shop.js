const routes=require("express").Router();
const path=require("path");
routes.get("/",(req,res,next)=>{
  console.log("Inside the main url");
  res.sendFile(path.join(__dirname,"../","./views/shop.html"));
  
});
module.exports=routes;

