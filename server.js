const express = require('express')
const userRutas = require('./routes/userRoutes')
const app = express()

app.set('port', process.env.PORT || 4000);
app.use(express.json())

app.use("/", userRutas)

app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
  });