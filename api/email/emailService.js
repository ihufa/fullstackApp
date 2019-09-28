const nodemailer = require('nodemailer')


const smtpConfig = {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'planthooddk@gmail.com',
        pass: 'Kerrig4n'
    }
};
let transporter = nodemailer.createTransport(smtpConfig)

  function sendMail(mail) {
  transporter.sendMail({
    from: 'Planthood <planthooddk@gmail.com>',
    to: mail.receiver,
    subject: mail.subject,
    text: mail.message
  }, (err, info) => {
    if(err) {
        console.log(err)
        return
    }
    console.log(info.envelope);
    console.log(info.messageId);
  });
  }

  module.exports = sendMail