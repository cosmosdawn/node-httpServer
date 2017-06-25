var http = require('http');

var server = http.createServer(function(req,res){
	console.log('有客户端连接');

	res.writeHeader(200,{
		'content-type': 'text/html;charset="utf-8"'
	});

	res.write('这是正文部分');
	res.end();
}).listen(8888);

console.log('服务器开启成功')