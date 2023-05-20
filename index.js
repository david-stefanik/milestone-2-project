// require('dotenv').config()
// const express = require('express')
// const { default: mongoose } = require('mongoose')
// const app = express()



const post =[{
    username: 'david',
   title:'post1' 
}]
app.get('/posts',(req,res)=>{
    res.json(posts)
})

// main().catch(err => console.log(err));

// async function main() {
//   await mongoose.connect('mongodb://127.0.0.1:3000/test');}
  app.listen('')