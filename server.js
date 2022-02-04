const express = require("express")

const app = express()


app.get("/", (req, res) => {
 return res.status(200).json({
  message: "welcome to my server"
 })
})


const port = process.env.PORT || 4000
app.listen(port, () => {
 console.log(`Server listening on port ${port}`)
})