const express=require('express');
const port=8000;
const app=express();
const path=require('path');
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.get('/',function(req,res){
    return res.render('Home');
})
app.listen(port, function(){
    console.log("App is up and running");
});