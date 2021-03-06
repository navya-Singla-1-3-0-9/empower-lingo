const  mongoose  = require("mongoose");
const passportLocalMongoose= require('passport-local-mongoose');
const  Schema  =  mongoose.Schema;
const  userSchema  =  new Schema({
   username: String,
   email:String,
progress: String,
mastered:[String]

});

userSchema.plugin(passportLocalMongoose);
let  User  =  mongoose.model("User", userSchema);
module.exports  = User;