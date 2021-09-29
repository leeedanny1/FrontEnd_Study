// 익스프레스모듈
// use

const express = require('express');

const app = express();
const port = 3000;


app.use((req, res) => { //req 사용자가 전달한 내용, res 서버가 다시 보내줄 내용
    res.writeHead('200', {'contents-type':'text/html;charset=utf-8'});
    res.end('<h2>익스프레스 서버에서 응답한 메세지입니다.</h2>');    
});

app.listen(port,() =>{
    console.log(`${port}포트로 서버 실행중`)
});