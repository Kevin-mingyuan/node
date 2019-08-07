// 1、引入模块
const http = require('http');
const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
const route = express.Router(); 
const Host = '14.120.5.57' || 'localost';
const Port = '8080';

// 2、搭建服务器
var server = http.createServer(function(request, response) {
    console.log(request.url)
    response.writeHead(200, {
        'content-type': 'text/html;charset:utf-8'
    });
	//读取路径为根目录下的index.html
    response.write(fs.readFileSync(path.resolve(__dirname,"index.html")));
    response.end();
})

console.log(server.url);
route.get('/home',(req,res)=>{
	res.send('123ok');
})

//错误信息
server.on('error',(err)=>{
	console.log(err);
})

server.listen({host:Host,port:Port}, function() {
    console.log('端口号localhost:' + server.address().port)
});
