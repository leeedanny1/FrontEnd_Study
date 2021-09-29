// http

// 사운드파일을 가져와서 서버에 연결
const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    fs.readFile('sunny.mp3', (err, data) => {
        if(err){
            console.log(err);
        }else{
            res.writeHead(200, {'content-type':'audio/mp3'});
            res.end(data);
        }
    });
}).listen(3000, () => {
    console.log('사운드 서버실행중....');
});