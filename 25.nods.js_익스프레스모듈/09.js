const nodemailer = require('nodemailer'); // npm i nodemailer

const transporter = nodemailer.createTransport({
    service:'Gmail',
    auth:{
        user:'account@gmail.com',
        pass:'password'
    },
    host:'smtp.mail.com',
    port:'465'
});

const mailOptions = {
    from: "이대희<account@gmail.com>",
    to: "이대희<account@gmail.com>",
    subject: "node.js의 nodemailer 테스트중입니다.",
    html:"<h2>안녕하세요. 메일이 잘 가나요?</h2><p style='color: deeppink'>정말 잘 가네요~</p>"
}

transporter.sendMail(mailOptions, (err, info) => {
    transporter.close();
    if(err){
        console.log(err);
    } else{
        console.log(info);
    }
})