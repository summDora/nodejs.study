function conso(){
    console.log( __filename );
    console.log(__dirname );
}
let a=setTimeout(conso,3000);
clearTimeout(a);
