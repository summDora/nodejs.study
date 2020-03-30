var events = require('events');
var eventEmitter=new events.EventEmitter();
// 创建事件处理程序
var connectFunc=function connected(){
    console.log('连接成功');
    //触发 data-receiver 事件
    eventEmitter.emit('data_receiver')
}
//绑定链接事件、数据接收成功事件
eventEmitter.on('connection',connectFunc);
eventEmitter.on('data_receiver',()=>{
    console.log('数据接收成功');   
})
//触发connection事件
eventEmitter.emit('connection')
console.log(eventEmitter.listenerCount('connection'));//1
console.log(eventEmitter.listeners('connection'));//[function connected]

/* EventEmitter的属性介绍:
    addListener(event,listener):为指定事件添加一个监听器
    on(event,listener):为指定事件注册一个监听器
    once(event,listener):为指定事件注册一个单次监听器，即 监听器最多只会触发一次，触发后立刻解除该监听器。
    removeListener(event, listener)：移除指定事件的某个监听器，监听器必须是该事件已经注册过的监听器。
    emoveAllListeners([event])：移除所有事件的所有监听器， 如果指定事件，则移除指定事件的所有监听器。
    emit(event, [arg1], [arg2], [...])：按监听器的顺序执行执行每个监听器，如果事件有注册监听返回 true，否则返回 false。
    listeners(event):返回指定事件的监听器数组。17行
    listenerCount(eventName)：16行
*/