const nodemailer = require('nodemailer');


const index = (req, res) => {
    //console.log(__dirname);
    res.render('contacto');
};

const submit = async (req, res) => {
    console.log(req.body);
    res.send('Formulario enviado');

    const transporter = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "ef94456e0964e4",
          pass: "f5693580f94f77"
    },
    });

    try {
         // send mail with defined transport object
    const info = await transporter.sendMail({
        from: `"${req.body.nombre}" <${req.body.correo}>`, // sender address
        to: "bar@example.com, baz@example.com", // list of receivers
        subject: "formulario de contacto ✔", // Subject line
        text: req.body.mensaje, // plain text body
        html: `<pre>${req.body.mensaje}</pre>`, // html body
    });
    console.log(info);
    } catch (error) {
        console.log(error);
    }
    
}

module.exports = {
index,
submit
};