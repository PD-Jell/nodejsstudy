// console.log("Hello, World!"); // Hell world

// blocking code test
var fs = require("fs");

var data = fs.readFileSync('input.txt');

// blocking
// console.log(data.toString());
// console.log("Program has ended");

// non-blocking
// fs.readFile('input.txt', function(err, data) {
//     if (err) return console.error(err);
//     console.log(data.toString());
// });
// console.log("Program has ended");

var events = require('events');
var eventEmitter = new events.EventEmitter();

var connectHandler = function connected(){
    console.log("Connection Successful.");

    // data_received 이벤트를 발생시키기
    eventEmitter.emit("data_received");
}

eventEmitter.on('connection', connectHandler);

eventEmitter.on('data_received', function(){
    console.log("Data Received");
});

eventEmitter.emit('connection');

console.log("Program has ended");

// 이벤트 핸들러와 이벤트 연동시키기
// event와 EventHandler를 연동(bind)
// 'eventName'은 임의로 설정 가능
// eventEmitter.on('eventName', eventHandler);




var http = require("http");
http.createServer(function(request, response){
    /*
        HTTP 헤더 전송
        HTTP Status: 200 : OK
        Content Type : text/plain
    */
    response.writeHead(200, {'Content-Type': 'text/plain'});
    /*
        Response Body를 "Hello world"로 설정.
    */
    response.end("Hello World!\n");
}).listen(8081);

console.log("Server running at http://127.0.0.1:8081")