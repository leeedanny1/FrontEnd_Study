const express = require('express');
const bodyparser = require('body-parser');
// npm i expression-session
const expressSession = require('express-session');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(bodyparser.urlencoded({extended: false}));
app.use(expressSession(){
    secret:'!@#$%^&*()',
    resave: false,
    saveUninitialized:true
});

app.get('/login', (req, res) => {
    fs.readFile('login.html', 'utf8', (err, data) => {
        if(!err){
            res.writeHead(200, {'content-type':'text/html'});
            res.end(data);
        }else{
            console.log(err);
        }
    });
});

app.post('/loginOk', (req, res) => {
    const userid = req.body.userid;
    const userpw = req.body.userpw;
    console.log(userid);
    console.log(userpw);
    
    // admin / 1234
    if(userid == 'admin' && userpw == '1234'){
        req.session.member={
            id: userid,
            userpw: userpw,
            isauth: true
        };
        res.redirect('/main');
    }else{
        res.redirect('/fail');
    }
});

app.get('/main', (req, res) => {
    console.log(session.member);
    if(session.member){
        fs.readFile('main.html', 'utf8', (err, data) => {
            res.writeHead(200, {'content-type':'text/html'});
            res.end(data);
        });
    }else{
        res.redirect('/login');
    }
});

app.get('/fail', (req, res) => {
    fs.readFile('fail.html', 'utf8', (err, data) => {
        res.writeHead(200, {'content-type':'text/html'});
        res.end(data);
    });
});

app.get('/logout', (req, res) => {
    res.session.destory(() => {
        console.log('세션이 삭제되었습니다!')
    });
    res.redirect('/login');
});

app.listen(port, () => {
    console.log(`${port}포트로 서버 실행중...`);
});

