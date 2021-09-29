// 익스프레스모듈
//

const express = require('express');

const app = express();
const port = 3000;


app.use((req, res) => {
    console.log(`첫 번째 미들웨어 실행`);
    const userAgent = req.header('User-Agent');; // 사용자의 종류를 알 수 있음
    console.log(userAgent);

    res.writeHead(200, {'content-type':'text/html;charset=utf-8'});
    res.write('<h2>익스프레스 서버에서 응답한 메세지입니다.</h2>');    
    res.write(`<p>User-Agent: ${userAgent}</p>`);
    // res.write(`<p>paramName: ${paramName}</p>`);
    
    res.end();
});

app.listen(port, ()=>{
    console.log(`${port}포트로 서버 실행중...`);
})