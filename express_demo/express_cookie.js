let express=require('express')
let app =express();
let cookieparser=require('cookie-parser');
let util=require('util')

app.use(cookieparser())
app.get('/',(req,res)=>{
    console.log('cookie:'+util.inspect(req.cookies));
    res.end('cookie');
})
app.listen(8086)