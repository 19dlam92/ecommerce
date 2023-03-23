const cookieParser = require('cookie-parser');
const express = require("express");
const cors = require('cors');
const multer = require('multer');
const app = express();
const port = 8000;
app.use( cookieParser() );
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
app.use( cors({ credentials: true, origin: 'http://localhost:3000' }) );
app.use(( req,res,next ) => {
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Methods','GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Methods','Content-Type','Authorization');
  next(); 
})
require('dotenv').config();
require("./server/config/mongoose.config")
require("./server/routes/productManager.route")(app)

app.listen( port, () => console.log(`Listening on port: ${ port }`) );


