const mongoose=require("mongoose");


const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:[true,'username is must']


    },
    email:{
        type:String,
        required:[true,'email is must']

    },
    password:{
        type:String,
        required:[true,'password is must']

    },

});


const userModel=mongoose.model("user",userSchema);

module.exports =userModel; 