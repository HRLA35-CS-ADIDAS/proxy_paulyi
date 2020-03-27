const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();
const port = 7777;

app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')))


let apiProxy = createProxyMiddleware('/search', {target: 'http://localhost:8001', changeOrigin: true});
// let testing = createProxyMiddleware('/styles.css', {target: 'http://localhost:8001', changeOrigin: true});
app.use(apiProxy);
// app.use(testing);


app.listen(port, ()=>console.log('Your server is live and listening on ', port))