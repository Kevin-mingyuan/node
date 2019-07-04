var http = require('http'), httpProxy = require('http-proxy');  
  
// 新建一个代理 Proxy Server 对象  
var proxy = httpProxy.createProxyServer({});  
  
// 捕获异常  
proxy.on('error', function (err, req, res) {  
  res.writeHead(500, {  
    'Content-Type': 'text/plain'  
  });  
  res.end('Something went wrong. And we are reporting a custom error message.');  
});  
    
// 在每次请求中，调用 proxy.web(req, res config) 方法进行请求分发  
var server = require('http').createServer(function(req, res) {  
  // 在这里可以自定义你的路由分发  
  var host = req.headers.host, ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;  
  console.log("client ip:" + ip + ", host:" + host);  
    
  
  switch(host){  
    case 'www.baidu.com':   
        proxy.web(req, res, { target: 'http://localhost:3000' });  
    break;  
    case 'https://www.cnblogs.com/wunan/p/6547990.html':  
        proxy.web(req, res, { target: 'http://localhost:9527' });  
    break;
    default:  
        res.writeHead(200, {  
            'Content-Type': 'text/plain'  
        });  
        res.end('Welcome to my server!');  
  }  
});  
  
console.log("listening on port 8080")  
server.listen(8080);