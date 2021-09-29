// 익스프레스모듈
//

const express = require('express');
const bodyparser = require('body-parser');
const { urlencoded } = require('express');

const app = express();
const port = 3000;


// body-parser를 이용해 application/x-www-form-urlencoded 파싱
// http://localhost:3000/?userid=apple&userpw=1111
// (전송방식이 get이 아니기때문에 데이터를 받을 수 없음)

app.use(bodyparser, urlencoded({
    extended: false
}));
app.use((req, res) => {
    const paramId = req.body.userid;
    const paramPw = req.body.userpw;
    console.log(`paramId: ${paramId}, paramPw: ${paramPw}`);
})



app.listen(port, ()=>{
    console.log(`${port}포트로 서버 실행중...`);
})