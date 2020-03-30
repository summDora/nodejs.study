var fs=require('fs');
var data = '';
// 创建可读流
var readerStream=fs.createReadStream('./../input.txt');
// 设置编码为 utf8。
readerStream.setEncoding('utf8');
// 处理流事件
readerStream.on('data',function(chunk){
    data+=chunk; 
    console.log(data);
})
console.log('read finish!');