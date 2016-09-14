var http = require('http');
http.get("http://"+process.argv[2],function(res)
{
	res.on('data',function(chunk)
		{
			console.log('內容:'+chunk);
		});
}).on('error',function(e))
{
	console.log('錯惹:'+e.message)
});