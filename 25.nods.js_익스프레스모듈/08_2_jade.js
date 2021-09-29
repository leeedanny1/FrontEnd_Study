const express = require('express');
const fs = require('fs');

const jade = require('jade'); // npm i jade

const app = express();
const port = 3000;

const router = express.Router();

// localhost:3000/about
router.route('/userinfo').post((req, res) => {
    fs.readFile('/jade2.jade', 'utf-8', (err, data) => {
        if(!err){
            const jd = jade.compile(data);
            res.writeHead(200, {'content-type':'text/html'});
            res.end(jd({userid:'apple', name:'김사과', desc:'착해요'}));
        } else{
            console.log(err)
        }
    });
});



// 파일이 에러가 발생했을 때 실행할 메시지
app.use('/', router);

app.all('*', (req, res) => {
    res.status(404).send('<h2>페이지를 찾을 수 없습니다.</h2>');
});

// 정상 실행시 보여주는 메시지
app.listen(port, () => {
    console.log(`${port} 포트로 서버 실행중...`);
})
