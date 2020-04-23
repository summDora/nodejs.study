let express = require('express');
let app = express();
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
    res.send(answer) 
    //{"first_name":"haha","last_name":"heihei"}
})
let server = app.listen(8084,'192.168.199.111',()=>{
    console.log('访问地址：http://%s:%s',server.address().address,server.address().port);
})