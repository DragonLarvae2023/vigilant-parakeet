const express=require("express");
const router=express.Router();
const path=require("path");
router.post("/product",(req,res)=>{
  console.log(req.body);
  res.redirect("/")
});
router.use("/add-product",(req,res)=>{
  console.log("Inside the middleware tackling add-product url");
  res.sendFile(path.join(__dirname,"../","./views/add-product.html"))
});
module.exports=router;
