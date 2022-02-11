const mongoose=require("mongoose");

const userSchemea=new mongoose.Schema({
    fistname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cpassword:{
        type:String,
        required:true
    }


})
//now we have to create collections
const Register=new mongoose.model("Register",userSchemea);

module.exports=Register;