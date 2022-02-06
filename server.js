const express = require("express")

const app = express()


app.get("/:name", (req, res) => {
 const {name} =  req.params
 return res.status(200).json({
  message: `welcome to my server, ${name ? name : "guest"}`
 })
})


const port = process.env.PORT || 4000
app.listen(port, () => {
 console.log(`Server listening on port ${port}`)
})