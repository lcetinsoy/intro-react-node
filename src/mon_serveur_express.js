const path = require('path')
const express = require('express')

const app = express()
const port = 3333

var tasks = [
  'aller faire du sport',
  'dormir'
]

app.use(express.static('public'));

app.get("/tasks", function(request, response){
    response.json({tasks: tasks})
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

