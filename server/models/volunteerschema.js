const  mongoose  = require("mongoose");
const  Schema  =  mongoose.Schema;
const  volunteerSchema  =  new Schema({
   full_name: String,
    email:String,

});


let  Volunteer =  mongoose.model("Volunteer", volunteerSchema);
module.exports  = Volunteer;