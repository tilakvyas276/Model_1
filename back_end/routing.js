// const express = require('express');
// const app = express();
// app.get("/",(req,res)=>{
// res.send("we are  committed to srve you better !");
// });
// app.listen(5500);

// app.get("/about",(req,res)=>{
// res.send("Welcome in About us Page");
// });
// app.listen(5500);

const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'Public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Public', 'index.html'));
});

app.listen(8081, () => {
    console.log('Server running on http://localhost:8081');
});