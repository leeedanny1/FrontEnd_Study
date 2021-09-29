const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;
const router = express.Router();

// http://loaclhost:3000/mail
router.route('/mail').get((req, res) => {
    fs.readFile('mail.html', 'utf-8',(err, data) => {
        if(!err){
            res.writeHead(200, {'content-type':'text/html'});
            res.end(data);
        } else{
            console.log(err);
        }
    })
})




router.route('/mail').post((req, res) => {
    const from = req.body.from;
    const fromemail = req.body.fromemail;
    const to = req.body.to;
    const toemail = req.body.toemail;
    const title = req.body.title;
    const content = req.body.content;

    const fmtfrom = `${from}<${fromemail}>`;
    const fmtto = `${to}<${toemail}>`;


    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth:{
            user:'leeedanny1@gmail.com',
            pass:'l2617@1917'
        },
        host:'smpt.mail.com',
        port:'465'
    });

    const mailOptions = {
        from: fmtfrom,
        to: fmtto,
        subject: title,
        text: content
    }

    transporter, sendMail(mailOptions, (req, res) => {
        transporter.close();
        if(err){
            console.log(err);
        } else {
            console.log(info);
        }
    })




})




//오류발생시
app.use('/', router);
app.all('*', (req, res) => {
    res.status(404).send('<h2>페이지를 찾을 수 없습니다.</h2>');
});


//서버 실행시
app.listen(port, () => {
    console.log(`${port}번 포트로 서버 실행중...;`);
})