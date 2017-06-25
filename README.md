# node-httpServer
其中server.js文件是网上凡是提到使用node创建本地服务器都会贴出来的很流行的10行代码

		var http = require('http');                          //  引入node中的http模块

		var server = http.createServer(function(req,res){    //  http暴露出来的方法用于实例化一个服务器
			console.log('有客户端连接');                     //  当有请求连接时候打印信息

			res.writeHeader(200,{                            //  服务器响应
				'content-type': 'text/html;charset="utf-8"'
			});

			res.write('这是正文部分');
			res.end();
		}).listen(8888);                                     //  监听端口

		console.log('服务器开启成功')