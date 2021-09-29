// 익스프레스모듈
// 미들웨어-redirect

const express = require('express');

const app = express();
const port = 3000;


app.use((req, res) => {
    console.log(`첫 번째 미들웨어 실행`);
    res.redirect('https://www.naver.com');
});
app.listen(port, ()=>{
    console.log(`${port}포트로 서버 실행중...`);
})