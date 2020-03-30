function Name(){
    var name;
    this.setName=function(i){
        name=i
    }
    this.sayHello=function(){
        console.log('Hello!'+name);
    }
}
module.exports=Name;