 const express=require("express");
const ejs=require("ejs");
const bodyParser=require("body-parser");
const app=express();

app.set('view engine' , 'ejs');

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

const weekDays=["Sunday","Monday","Tuesday","Wednesday","thursday","Friday","Saturday"];

var items=[];

app.get('/' ,(req,res) =>
{
    let date=new Date();
    let options ={
        weekday:"short",
        day:"numeric",
        month:"short"
    };
    let day=date.toLocaleDateString("en-US",options);

res.render('list',{Day: day,newItems:items});
});
 
app.post('/',(req,res) =>
{
    var item=req.body.newTask;
    items.push(item);
    res.redirect('/');
});






app.post('/',(req,res) =>
{
   console.log(req.body.newTask);
});














app.listen(process.env.PORT || 3000,() => console.log("listening to port 3000."));
