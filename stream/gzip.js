//压缩文件
const fs =require('fs')
const zlib=require('zlib')
const readstream=fs.createReadStream('./../static/read.txt')
let writestream =fs.createWriteStream('./../static/read.txt.gz')
//压缩 read.txt 文件为 read.txt.gz
readstream.pipe(zlib.createGzip()).pipe(writestream)
console.log('压缩完成!');

