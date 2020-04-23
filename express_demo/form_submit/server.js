let express = require('express');
let fs = require('fs')
let app = express();
let bodyParser = require('body-parser')
// 创建 application/x-www-form-urlencoded 编码解析
let urlencodedParser = bodyParser.urlencoded({extended:false})

/* app.use('/public',express.static('./../public')) */

app.get('/index',(req,res)=>{
    res.sendFile(__dirname+'/'+'index.html')
})
app.get('/process_get',(req,res)=>{
    let answer={
        first_name:req.query.first_name,
        last_name:req.query.last_name
    }
    console.log('answer haha');
    //res.send(typeof(answer)) 
    //object
    res.end(JSON.stringify(answer)) 
})
app.post('/process_post',urlencodedParser,(req,res)=>{
    let person={
        birthday:req.body.birthday,
        age:req.body.age,
    }
    console.log('post_person');
    res.send(person)
})

let server = app.listen(8084,'192.168.199.111',()=>{
    console.log('访问地址：http://%s:%s',server.address().address,server.address().port);
})
// http://192.168.199.111:8084/index
// submit
// http://192.168.199.111:8084/process_get?first_name=haha&last_name=heihei
// {"first_name":"haha","last_name":"heihei"}
// http://192.168.199.111:8084/process_post
// {"birthday":"1993","age":"12"}

console.log(
    '问题：',
    '1.res.send() 和 res.end()的联系与区别',
    //red.end()的参数必须是string或buffer类型
    //red.end(answer)是错误的  因为answer是objuct
    //可写成res.end(JSON.stringify(answer)) 或者res.send(answer)
    '2.body-parser 与 bodyParser.urlencoded({extended:false})的含义',
    //body-parser 翻译 正文分析器 作用是对post请求的请求体进行解析
    //处理不同类型的请求体，不同的编码，不同的压缩类似 
    //常用用法：
    //app.use(bodyParser.json())-------application/json
    //app.use(bodyParser.urlencoded({extended:false}))---application/x-www-form-urlencoded
    //Content-Type：请求报文主体的类型、编码
    //常见的类型有text/plain、application/json、application/x-www-form-urlencoded。
    //常见的编码有utf8、gbk。
    //Content-Encoding：声明报文主体的压缩格式
    //常见的取值有gzip、deflate、identity
    'app.post(/process_post,urlencodedParser,(req,res)=>{}的参数意义'
);
