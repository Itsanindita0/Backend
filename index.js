require('dotenv').config()

const express = require('express') //imported or required express
const app = express()  //created the variable app using express
// const port = 4000

app.get('/',(req, res) => {
    res.send("hello world")
})

app.get('/twitter',(req, res) => {
    res.send("anindita is sooooo pretttyyyy")
})

app.get('/login', (req, res) => {
    res.send('<h1>please login at chai aur code<h1/>')
})

app.get('/youtube',(req, res) => {
    res.send("<h2>hiii youtube user<h2/>")
})


app.listen(process.env.PORT, () => {
    console.log(`example app listening on port ${process.env.PORT}`);
    
})