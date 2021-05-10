var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'Hotmail',
    auth: {
        user: 'myemail@hotmail.com',
        pass: 'mypassword'
    }
});

var mailOptions = {
    from: 'myemail@hotmail.com',
    to: 'myfriend@anyservice.com',
    subject: 'Sending Email using Node.js',
    // text: 'Hello Friend!',
    html: `<html><body><table border="0" width="100%" style="  border:15px solid #0072c6;" cellspacing='0' cellpadding='0'><tr><td align="center" colspan="2"><h1 style="color:#0072c6;padding:0px;margin:0;margin-top: 20px;">Certificate Of Completion</h1></td></tr><tr><td align="center" colspan="2"><p style="color:#383737;font-size:1.5em;margin:20px auto;">This Certificate is awarded to</p></td></tr><tr><td align="center" colspan="2"><h2 style="display:inline; font-size: 40px; border-bottom: 1px dashed #cecece;margin:auto 20px">Friend's Name</h2></td></tr><tr><td align="center" colspan="2"><p style="color:#383737;font-size:1.5em;margin:0;margin-top:20px;">For his/her completion of HSE Awareness session</p></td></tr><tr><td align="center" colspan="2"><p style="color:#383737;font-size:1.5em;margin:5px;margin-bottom:20px;">Awarded on 1st March 2018</p></td></tr><tr><td align="center"><p style="color:#383737;font-size:1.2em;margin:5px;">Person Name</p><p style="color:#383737;font-size:1.2em;margin:5px;">Learning Lead</p><p style="color:#383737;font-size:1.2em;margin:5px;">Department Name</p></td><td align="center"><p style="color:#383737;font-size:1.2em;margin:5px;">Person Name</p><p style="color:#383737;font-size:1.2em;margin:5px;">Learning Lead</p><p style="color:#383737;font-size:1.2em;margin:5px;">Department Name</p></td></tr></table></body></html>`
};

transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
    }
    else{
        console.log('Email sent: ' + info.response);
    }
})