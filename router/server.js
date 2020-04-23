let http =require('http');
let url =require('url');
/* function start(){
    function onRequest(request,response){
        let pathname=url.parse(request.url).pathname;
        console.log("request for"+pathname+'received.');
        response.writeHead(200,{'Content-Type':'text/plain'})
        response.write('Hello world !');
        response.end();
    }
    http.createServer(onRequest).listen(8888);
    console.log("server has started");
    
} */
function start(route){
    function onRequest(request,response){
        let pathname=url.parse(request.url).pathname;
        console.log("request for"+pathname+'received.');

        route(pathname);

        response.writeHead(200,{'Content-Type':'text/plain'})
        response.write('Hello world !');
        response.end();
    }
    http.createServer(onRequest).listen(8888);
    console.log("server has started");
    
}


exports.start=start;
/* export default start; */