const express= require("express");
const bodyParser=require("body-parser");
const chalk=require("chalk");
const admin=require("./routes/admin.js");
const shop=require("./routes/shop.js")
const app=express();
const path=require("path");
const port=3000
app.listen(port,(err)=>{
  if(err)
  console.log(chalk.red(`Error encountered ${err}`));
  else
  console.log(chalk.green(`Succsfully listening to ${port}`));

});
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,"public")));
app.use((req,res,next)=>{
  console.log(chalk.blue("request encountered"));
  next();

});
app.use(shop);
app.use(admin); 

app.use((req,res,next)=>{
  res.status(404).sendFile(path.join(__dirname,"./views/404.html"));
})
