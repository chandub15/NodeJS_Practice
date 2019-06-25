var http=require('http');
var server=http.createServer(function(req,res){
    console.log('new client request receives');
    res.write('hello client');
    res.end();
})

server.listen(3000);
console.log('server is ready');