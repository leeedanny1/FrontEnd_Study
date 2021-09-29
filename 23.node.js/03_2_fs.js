// writeFile

const fs = require('fs'); //파일을 다루는 모듈 fileSystem 모듈

const data = "Hello Node.js!2"

// text2에다가 data를 utf-8형식으로 써라, 에러시 => if문, 아니면 else
fs.writeFile('text2.txt', data, 'utf-8', (err) => {
    if(err){
        console.log("오류발생");
    } else{
        console.log("저장완료/비동기");
    }
});

const text = fs.writeFileSync('text2.txt', data, 'utf-8');
console.log(`저장완료/동기: ${data}`);