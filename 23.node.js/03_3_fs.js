// 예외처리

const fs = require('fs'); //파일을 다루는 모듈 fileSystem 모듈

// 비동기 처리는 예외처리를 할 필요가 없음
fs.readFile('text11.txt', 'utf-8',(err, data) => {
    if(err){
        console.log(`err`);
    }else{
        console.log(`비동기식으로 읽음: ${data}`);
    }
});

// 예외처리문
try{
    const text = fs.readFileSync('text11.txt', 'utf-8');
    console.log(`동기식으로 읽음: ${text}`);
} catch(e){
    console.log(`에러발생! / 동기`);
}


console.log(`프로그램 종료`);