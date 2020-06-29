function ola(){
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    segure: true,
    auth: {
        user: "mauricom7@hotmail.com",
        pass: "mbn112011"
    }
});

transporter.sendMail({
    from: "Mauricio Nunes <mauricom7@hotmail.com>",
    to: "mauricionunesdasilvanunes@gmail.com",
    subject: "teste",
    text: "dasdasdasd"
}).then(message => {
    console.log(message);
}).catch(err => {
    console.log(err);
})

}

setInterval(ola, 5000)