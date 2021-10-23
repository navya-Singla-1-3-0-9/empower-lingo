const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();
app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });
  
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
app.get("/translate" ,(req,res)=>{
  res.sendFile(__dirname+ "/views/englishToasl.html");
});
app.get("/translate1" ,(req,res)=>{
  res.sendFile(__dirname+ "/views/aslToEnglish.html");
});