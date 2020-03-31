const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app){
    app.use(createProxyMiddleware('/search', {target : 'http://ec2-13-52-177-144.us-west-1.compute.amazonaws.com:3001'}))
    app.use(createProxyMiddleware('/product', {target : 'http://ec2-13-57-210-113.us-west-1.compute.amazonaws.com:3000'}))
}