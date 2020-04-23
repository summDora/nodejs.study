let http=require('http');
let url=require('url');
let util=require('util');

http.createServer((req,res)=>{
    //req 回应 res 请求
    res.writeHead(200, {'Content-Type': 'text/plain;charset=utf8'});
    var params = url.parse(req.url, true).query;
    res.write("网站名：" + params.name);
    res.write("\n");
    res.write("网站 URL：" + params.url);
    res.end();
}).listen(3000)