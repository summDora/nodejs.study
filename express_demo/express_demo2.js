let express = require('express')
let app = express();

app.get('/',(req,res)=>{
    console.log('首页get请求');
    res.send('首页')
})
app.post('/',(req,res)=>{
    console.log('首页post请求');
    res.send('首页post')
})
app.get('/user',(req,res)=>{
    console.log('用户页请求');
    res.send('用户页')
})
app.get('/delete',(req,res)=>{
    console.log('删除页delete请求');
    res.send('删除页')
})
app.get('/ab*cd',(req,res)=>{
    console.log('正则get请求路径');
    res.send('正则匹配')
})
let server = app.listen(8082,()=>{
    let host = server.address()
    let port = server.address().port
    console.log('demo2实例，访问地址为http://192.168.199.111:8082',host,port);
    
})
