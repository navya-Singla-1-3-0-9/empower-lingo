const  mongoose  = require("mongoose");
const  Schema  =  mongoose.Schema;
const  volunteerSchema  =  new Schema({
    username:String,
   full_name: String,
    email:String,
    reason: String,
    image: String

});


let  Volunteer =  mongoose.model("Volunteer", volunteerSchema);
module.exports  = Volunteer;