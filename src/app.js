const express = require("express");
const hbs=require("hbs");
const path = require("path");
const app = express();
//port number should be hosted either this|| or this 3002

require("./db/conn");
const port=process.env.PORT || 3000;

const static_path = path.join(__dirname  , "../public");
const template_path=path.join(__dirname, "../templates/views");
const partials_path=path.join(__dirname, "../templates/partials");
const blogs_path=path.join(__dirname, "../templates/views");
const gamesq_path=path.join(__dirname, "../templates/views");
const gamesc_path=path.join(__dirname, "../templates/views");

app.get('/index', function (req, res) {
    res.sendFile(path.join(__dirname+'/index'));
   });

   app.get('/quiz', function (req, res) {
    res.sendFile(path.join(__dirname+'/quiz'));
   });

   app.get('/blogs', function (req, res) {
    res.sendFile(path.join(__dirname+'/blogs'));
   });
const Register=require("./models/register");
const res = require("express/lib/response");
//console.log(path.join());
//const static_path=path.join

app.use(express.static(static_path));
//app.use(express.static(blogs_path));
app.use(express.static(gamesq_path));
app.use(express.static(gamesc_path));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.set("view engine","hbs");

app.set("views", template_path);
app.set("view engine", "hbs");
hbs.registerPartials(template_path);
hbs.registerPartials(partials_path);
hbs.registerPartials(blogs_path);
hbs.registerPartials(gamesq_path);
hbs.registerPartials(gamesc_path);


app.get("/", (req,res) => {
    //will show render page
    res.render("index");
});
app.get("/register", (req,res) => {
    //will show render page
    res.render("register");
});
app.get("/register", (req,res) => {
    //will show render page
    res.render("register");
});
//to create new user
app.post("/register",async (req,res)=>{
    try{
     //   console.log(req.body.firstname);
       // res.send(req.body,firstname);
       const password=req.body.password;
       const cpassword=req.body.confirmpassword;
       if(password===cpassword)
       {
         const registerUser=new Register({
             firstname:req.body.firstname,
             lastname:req.body.lastname,
             email:req.body.email,
             password:password,
             cpassword:cpassword,
         })
         const registered=await registerUser.save();
         res.status(201).render("index");
       }
       else{
           res.send("password are not matching");
       }
    }catch(error){
        res.status(400).send(error);
    }
})

app.get("/quiz", (req,res) => {
    //will show render page
    res.render("quiz");
});

app.get("/blogs", (req,res) => {
    //will show render page
    res.render("blogs");
});

app.listen(port, () =>{
    console.log(`server is running at port no ${port}`);
})