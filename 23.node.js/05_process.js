// process
process.on('exit', () => {
    console.log(`exit이벤트발생!`);
});


setTimeout( ()=> {
    console.log('3초후 시스템 종료');
    process.exit;
}, 3000);