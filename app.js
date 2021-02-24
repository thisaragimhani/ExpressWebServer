const express = require('express')//pull in express package
const app = express() //create new instance of expres so we can actually use that - can give any variable name
const path = require('path') 
const port = 3000

app.use(express.urlencoded({extended:false})) 
app.use(getWeather)
app.use(express.static(path.join(__dirname, 'public')))

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

//set up route with two arguments - url , arrow function
function getWeather(req, res, next) {
  req.visitorWeather = false
  if (req.visitorWeather) {
    res.send("Please come back to our app when it is not raining.")
  } else {
    next()
  }
}

app.get("/", (req, res) => {
  res.render("home", {
    isRaining: req.visitorWeather,
    pets: [
      { name: "Meowsalot", species: "cat" },
      { name: "Barksalot", species: "dog" }
    ]
  })
})

app.get("/about", (req, res) => {
  res.send("Thanks for learning more about us.")
})

app.post("/result", (req, res) => {
  if (req.body.color.trim().toUpperCase() === "BLUE") {
    res.send("Congrats, that is correct.")
  } else {
    res.send("Incorrect, please try again.")
  }
})

app.get("/result", (req, res) => {
  res.send("Why are you visiting this?")
})

app.get("/api/pets", (req, res) => {
  res.json([
    { name: "Meowsalot", species: "cat" },
    { name: "Barksalot", species: "dog" }
  ])
})
  
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})