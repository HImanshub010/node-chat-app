const path=require('path');
const http=require('http');
const express=require('express');
const socketIO=require('socket.io');


const publicPath=path.join(__dirname,'../public');
var app=express();

var server=http.createServer(app);
var port=process.env.PORT||3000;


var io=socketIO(server);

app.use(express.static(publicPath));

//listen for the connection from the client
io.on('connection',(socket)=>{   
	console.log("new user connected");

     socket.on('disconnect',()=>{
	    console.log('client diconnected from server');
     });

});

server.listen(port,()=>{
	console.log(`listening on the port ${port}`);
});