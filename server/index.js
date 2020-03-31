const express = require('express');
const morgan = require('morgan');
const path = require('path');
const proxyPath = require('./proxyPath.js')
const app = express();
const port = 4000;

app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')))


proxyPath(app);


app.listen(port, ()=>console.log('Your server is live and listening on ', port))