let fs = require('fs')
let data='这是写入流：out.txt'
// 创建一个可以写入的流，写入到文件 output.txt 中
let writestream = fs.createWriteStream('./../static/out.txt')
// 使用 utf8 编码写入数据
writestream.write(data,'utf8')
// 标记文件末尾
writestream.end();
// 处理流事件
writestream.on('finish',()=>{
    console.log('写入完成');
    fs.readFile('./../static/out.txt',(err,data)=>{
        if(err) {
            return console.error(err);
        }
        console.log(data,'fs读取out.txt');
        
    })
})
console.log('finish!');
