const nodemailer = require('nodemailer');
require('dotenv').config();

async function prepareEmail(data){

    const {name, email, phone, message} = data;

    if(name != undefined && email != undefined && message != undefined){

        let HTMLContent = `
        <div align='center'>
            <h1>Hola Santiago, mi nombre es ${name} y quiero contactarte...</h1>
            <h2>${message}</h2>
            <h3>Mi información de contacto es:</h3>
            <h3>Email: ${email}</h3>
            <h3>Número de celular: ${phone}</h3>
        </div>
        `;

        if(phone === ''){

            HTMLContent = `
            <div align='center'>
                <h1>Hola Santiago, mi nombre es ${name} y quiero contactarte...</h1>
                <h2>${message}</h2>
                <h3>Mi información de contacto es:</h3>
                <h3>Email: ${email}</h3>
            </div>
            `;
        }

        return sendEmail(HTMLContent)
            .then(() => { return {ok: true, status: 200}; })
            .catch((err) => console.log(err.message));
    }
    else{
        return {ok: false, status: 400};
    }
}

async function sendEmail(HTMLTemplate){

    const USER = process.env.USER;
    const PASSWORD = process.env.PASSWORD;
    const SECURE_PORT = process.env.SECURE_PORT;
    const EMAIL = process.env.EMAIL;

    try{

        const transporter = nodemailer.createTransport({

            host: 'smtp.gmail.com',
            port: SECURE_PORT,
            secure: true,
            auth:{
                user: USER,
                pass: PASSWORD
            }
        });

        const mail_options = {

            from: "Mi Portafolio Web <"+USER+">",
            to: EMAIL,
            subject: 'Quiero contactarte',
            html: HTMLTemplate
        };

        const result = await transporter.sendMail(mail_options);
        return result;

    }catch(err){
        console.log(err);
        transporter.close();
    }
}

module.exports = {

    prepareEmail: prepareEmail
}