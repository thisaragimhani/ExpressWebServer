const express = require('express')//pull in express package
const app = express() //create new instance of expres so we can actually use that - can give any variable name
//const path = require("path") 
const port = 3000

app.use(express.urlencoded({extended:false})) 
//app.use(getWeather)
//app.use(express.static(path.join(_dirname, "public")))

//app.set("view engine", "ejs")
//app.set("views", path.join(_dirname, "view"))

//set up route with two arguments - url , arrow function
app.get('/', (req, res) => {
  res.send(`
  <h1>What color is the sky on a clear day?</h1>
  <form action="/result" method="POST">
    <input type="text" name="color">
    <button>SUBMIT ANSWER</button>
  </form>
  `) //send back a message
})

app.get('/about', (req, res) => {
    res.send('user Hello World!') //send back a message
  })

app.post("/result", (req,res)=>{
    if(req.body.color.trim().toUpperCase() === "BLUE"){
        res.send("Congrats, that is correct. ") 
    }else {
        res.send ("Incorrect, please try again.")
    } 
})  

app.get('/result', (req, res) => {
    res.send('Why are you here!') //send back a message
  })
  
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})