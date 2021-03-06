const express = require("express");
const {spawn} = require('child_process');
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
const {PythonShell} =require('python-shell');

app.options('*', configuredCors);

const axios = require("axios");
  


const assembly = axios.create({
  baseURL: "https://api.assemblyai.com/v2",
  headers: {
    authorization: "32aaa1e6edae47f9a8259d9e9369b6fe",
    "content-type": "application/json",
  },
});
app.post('/transcribe',configuredCors,(req,res)=>{
  console.log(req.body.audio_url);
 assembly
.post(`/transcript`, {
    audio_url: req.body.audio_url
  })
  .then((result) => res.json({result: result.data}))
  .catch((err) => console.error(err));

})
app.get('/transcript/:id',(req,res)=>{
  assembly
  .get(`/transcript/${req.params.id}`)
  .then((result) => {
    console.log(result.data);
    res.json({transcript: result.data.text})})
  .catch((err) => console.error(err));

})
 
app.get('/', (req, res) => {
 console.log("here");
  var dataToSend;
  
  const python = spawn('python', ['app.py']);
  
  python.stdout.on('data', function (data) {
   console.log('Pipe data from python script ...');
   dataToSend = data.toString();
  });
 
  python.on('close', (code) => {
  console.log(`child process close all stdio with code ${code}`);

  res.send(dataToSend)
  });
  
 })
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
 res.json({user:req.user.username});
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
  search.json({
     engine:"google_jobs",
     q: "deaf", 
     location: "Delhi, India"
    }, (result) => {
     console.log(result.jobs_results);
      res.json({result : result.jobs_results});
    })
 });
app.get('/blogresult',(req,res)=>{
  // console.log(req.user);
  search.json({
     q: "Sign Language Blogs", 
    }, (result) => {
     // console.log(result.jobs_results);
     console.log(result);
     res.json({result : result.organic_results});
    })
 });

const Volunteer = require('./models/volunteerschema.js');
const Space = require('./models/spaceschema.js')
const Post = require('./models/postschema.js')
app.post('/volunteer',configuredCors,async (req,res)=>{
  console.log(req.body);
  let nv= new Volunteer({username:req.user.username,full_name: req.body.full_name,email:req.body.email, reason: req.body.reason,image:req.body.image});
  await nv.save();
  
});

app.post('/addspace',configuredCors,async (req,res)=>{
  let space = new Space({name:req.body.space, image: req.body.image, content: req.body.content});
  await space.save();

})
app.get("/getspaces", async (req, res) => {
 //await Space.findOneAndUpdate({name:"Practice ASL together"},{image:"https://i.pinimg.com/474x/f8/11/4f/f8114f56a1891c2213a545f46b705b1e--american-sign-language-greeting-card.jpg"})
  let spaces= await Space.find({});
  console.log(spaces);
  res.json({ spaces });
});

app.get("/getuser", (req,res)=>{
  if(!req.user){
    res.json({user:"null"});
  }else{
    let prog = (req.user.mastered.length*100)/26;
    console.log("prog",prog)
    res.json({username:req.user.username, email: req.user.email,progress:prog, mastered: req.user.mastered});
  }
  
})
app.post('/addpost/:id',configuredCors,async (req,res)=>{
  let space= await Space.findOneAndUpdate({_id:req.params.id},{$push:{posts:[req.body.question]}});
  let post = new Post({question:req.body.question,creator: req.user.username,linkedspace:space.name});
  await post.save();
})
app.get("/getspace/:id", async (req, res) => {
  console.log(req.params.id)
 let space= await Space.findOne({_id:req.params.id});
 let posts= await Post.find({linkedspace: space.name});
 console.log(posts)
  res.json({ space: space, posts: posts});
 let posts= await Post.find({linkedspace: space.name})
});

 console.log(posts)
  res.json({ space: space, posts: posts});
});
/*PythonShell.run('app.py',function (err, result){
  if (err) throw err;
  // result is an array consisting of messages collected 
  //during execution of script.
  console.log('result: ', result.toString());
  res.send(result.toString())
 
});*/
app.get("/getpost/:id",async (req,res)=>{
  let post = await Post.findOne({_id:req.params.id});
  console.log(post)
  res.json({post:post});
  
})
app.get('/getvols',async (req,res)=>{
  let vols= await Volunteer.find({});
  console.log(vols);
  res.json({volunteers:vols});
});

app.post('/:postid/addcomment',configuredCors,async (req,res)=>{
  let comment= {commentor: req.user.username, content: req.body.comment}
  await Post.findOneAndUpdate({_id:req.params.postid},{$push:{comments: [comment]}})
});
PythonShell.run('app.py',function (err, result){
  if (err) throw err;
  // result is an array consisting of messages collected 
  //during execution of script.
  console.log('result: ', result.toString());
  res.send(result.toString())
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
