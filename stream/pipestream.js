const fs =require('fs')
// 创建一个可读流read.txt
const readstream=fs.createReadStream('./../static/read.txt')
// 创建一个可写流 pipe.txt 
let writestream=fs.createWriteStream('./../static/pipe.txt')
// 管道读写操作
// 读取 read.txt 文件内容，并将内容写入到 pipe.txt 文件中
readstream.pipe(writestream)
fs.readFile('./../static/pipe.txt',(err,data)=>{
    console.log(data);
})
console.log('finish!');
