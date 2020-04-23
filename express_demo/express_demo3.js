let express = require('express');
let app = express();
app.use('/public',express.static('public'))
app.get('/',(req,res)=>{res.send('shouye')})
let server = app.listen(8083,'localhost',()=>{
    let host = server.address().address
    let port = server.address().port
    console.log('http://%s:%s',host,port);   
})

//http://192.168.199.111:8083/public/images/01.jpg