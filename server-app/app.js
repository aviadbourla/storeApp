
const express = require('express');
const app = express();
const userrouter = require('./routers/user');
const productrouter = require('./routers/productRouts');
const cors = require('cors');
const bodyParser = require('body-parser');
 

const port = process.env.PORT || 3001;
app.use(express.json());
app.use(cors({credentials: true, origin: 'http://localhost:3000'}))
app.use(bodyParser.json());
app.use(userrouter);
app.use(productrouter);

 
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/stor-database', {
  useNewUrlParser: true,
  useCreateIndex: true
})

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("mongoss connected");
});

app.listen(port, () => {
    console.log('Server listening on port ' + port);
});

 
 