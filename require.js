var http=require('http');
/* console.log(http); */
http.createServer((request,response)=>{
    //发送http头部
    //http状态值 200：ok
    //内容类型：text、plain
    response.writeHead(200,{'Content-Type':'text/plain'});
    //发送响应数据 hello world
    response.end('Hello World\n');
}).listen(8888);
//指定http服务器监听的端口号
console.log("Server running at http://192.168.199.111:8888/");
