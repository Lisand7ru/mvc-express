const express = require('express')
const nunjucks  = require('nunjucks')
const router = require('./app/routes.js')
require('dotenv').config()

const app = express()
nunjucks.configure('./app/views', {
  autoescape: true,
  express   : app
});

app.use(router)
app.use(express.static('public'))

app.listen(process.env.PORT, () => {
	console.log('App is listening on port ' + process.env.PORT)
})