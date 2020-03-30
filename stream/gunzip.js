//解压文件
const fs =require('fs')
const zlib=require('zlib')
//解压 read.txt.gz 文件为 read.txt
fs.createReadStream('./../static/read.txt.gz')
.pipe(zlib.createGunzip())
.pipe(fs.createWriteStream('./../static/read_gunzip.txt'))
console.log('解压完成!');
