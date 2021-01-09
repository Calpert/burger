const express = require('express')

const PORT = process.env.PORT || 8080

var app = express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())
var exhb = require('express-handlebars')
app.engine('handlebars', exhb({defaultLayout:'main'}))
app.set('view engine', 'handlebars')
var routes = require('./controllers/burgers_controller')
app.use(routes)



app.listen(PORT, function(){
    console.log("listening on PORT" + PORT)
})