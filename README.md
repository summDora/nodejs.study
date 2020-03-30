# nodejs.study
nodejs program
```
var http = require ('http')
```
```
var event = require ('event')
```
```
var fs = require ('fs')
```
```
流（stream）:
常见事件data、end、error、finish;
Readable - 可读操作
Writable - 可写操作
Duplex - 可读可写操作
Transform - 操作被写入数据，然后读出结果
```

```
模块系统：require和export
node.js模块分类
核心模块Code Module、内置模块、原生模块

require(./index2):
在加载index2的时候，require会先去找index2.js文件，没有就去找.json文件，再没有就找node文件
如果这些都没有，它会认为index2是一个文件夹
如果找到了这个文件夹，require还会去找这个文件夹里面是否有package.json
如果没有就加载失败
如果有，就找package.json里的main()
就加载里面的index.js/index.json/index.node
如果没有，也是失败;

2.require()的参数不是一个路径，直接是一个模块名称
1).现在核心模块中查找，是否有名字一样的模块，如果有，则直接加载该核心模块
如：require('http')

2)如果核心模块中没有该模块，就很认为是一个第三方模块（自定义模块）
先会去当前js文件所在的目录下找node_modules文件夹,当前目录没有，会去当前执行的文件的父目录里面寻找

如果要对外暴露属性或方法，就用 exports 就行
要暴露对象(类似class，包含了很多属性和方法)，就用 module.exports
```

