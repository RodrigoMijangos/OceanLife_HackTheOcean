const path = require("path")
const express = require("express")
const app = express()

// parse incoming traditional HTML form submits
app.use(express.urlencoded({ extended: false }))

// parse incoming JSON payloads
app.use(express.json())

app.use(express.static(path.join(__dirname, "public")))

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"))
})


app.listen(process.env.PORT || 3000)