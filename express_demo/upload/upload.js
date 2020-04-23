let express = require('express');
let fs=require('fs');
let app = express();
let multer= require('multer');

/* let bodyParser=require('body-parser')
let urlencodedParser = bodyParser.urlencoded({extended:false}) */
app.use(multer({dest:'/tem/'}).array('photo'))
app.get('/index',(req,res)=>{
    res.sendFile(__dirname+'/'+'index.html')
})
app.post('/file_upload',(req,res)=>{
    req.files.map((item)=>{
        let fileuploadpath=__dirname+'/upload_image/'+item.originalname;
        let filemessage='';
        /* 
            {
                "fieldname":"photo",
                "originalname":"ic_car_2.png",
                "encoding":"7bit",
                "mimetype":"image/png",
                "destination":"/tem/",
                "filename":"901cdc91ca0053dfcd5db5264272ca11",
                "path":"\\tem\\901cdc91ca0053dfcd5db5264272ca11",
                "size":108906
            }
        */
        fs.readFile(item.path,(err,data)=>{
            fs.writeFile(fileuploadpath,data,(err)=>{
                if(err){
                    console.log(err);
                }else{
                    filemessage={
                        message:'上传图片成功！',
                        filename:item.originalname
                    }
                }
                console.log(filemessage);
                
            })
        })   
    })
    res.send('上传图片成功！') 
})

let server=app.listen(8085,'192.168.199.111',()=>{
    let host=server.address().address
    let port=server.address().port
    console.log('访问地址为：http://%s:%s',host,port);
       
})
