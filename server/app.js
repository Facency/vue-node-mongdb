var express = require('express')
var app = express()
app.use('/api/user', function (rqs, res, next) {
  console.log(rqs)
  res.json({username: 'fcc', passwd: '123456'})
})
app.listen(4000, console.log('go'))

