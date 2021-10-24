const express = require("express");
const cors = require('cors')
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true, 
}
const PORT = process.env.PORT || 3001;
const app = express();
var bodyParser = require('body-parser')
const session = require('express-session')
const flash = require('connect-flash');
const passport= require('passport');
const localStrategy= require('passport-local'); 
app.use(bodyParser.urlencoded({ extended: false }));           
app.use(bodyParser.json())
const configuredCors = cors(corsOptions);
const SerpApi = require('google-search-results-nodejs')
const search = new SerpApi.GoogleSearch("3d2f0c869c4835a667441651b484e51df952db85c585a102cd1e2e134a1b9ea0")

app.options('*', configuredCors)


app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });
  const sessionConfig={
    secret: 'Thisisasecret',
    resave: false,
    saveUninitialized: true,
    cookie:{
      httpOnly: true,
      sameSite: false,
      expires: Date.now()+1000*60*60*24*7,
      maxAge: 1000*60*60*24*7
    }
  }
  const  User = require("./models/userschema");
  app.use(session(sessionConfig));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));
//handling login
passport.serializeUser(User.serializeUser());
//handling logout
passport.deserializeUser(User.deserializeUser());
const  mongoose  = require("mongoose");
const url= 'mongodb://localhost:27017/asl'
const  connect  =  mongoose.connect(url, { useNewUrlParser: true  });

app.post('/login',configuredCors,passport.authenticate('local',{successRedirect:""}),(req,res)=>{
 res.json({success:"user authenticated"})
});

app.post('/register',configuredCors,async (req,res)=>{
  const {email, username, password}= req.body;
	const nu = new User({email, username});
	const regdUser= await User.register(nu, password);
});
app.post('/mastered',configuredCors,async (req,res)=>{
   await User.findOneAndUpdate({username: req.user.username},{$addToSet:{mastered:[req.body.mastered]}});
   let user = await User.find({username:req.user.username});
   console.log(user);
 
});
app.get('/results',configuredCors,(req,res)=>{
  // console.log(req.user);
 /* search.json({
     engine:"google_jobs",
     q: "deaf", 
     location: "Delhi, India"
    }, (result) => {
     // console.log(result.jobs_results);
      res.json({result : result.jobs_results});
    })*/
 });

const Volunteer = require('./models/volunteerschema.js');
const Space = require('./models/spaceschema.js')
app.post('/volunteer',configuredCors,async (req,res)=>{
  console.log(req.body);
  let nv= new Volunteer({full_name: req.body.username,email:req.body.email})
  await nv.save();
  
});
app.post('/addspace',configuredCors,async (req,res)=>{
  let space = new Space({name:req.body.space, image: req.body.image, content: req.body.content});
  await space.save();
  
})

  
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
