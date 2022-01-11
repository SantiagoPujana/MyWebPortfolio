const express = require('express')
const router = express.Router()
const nodemailer = require('nodemailer')
require('dotenv').config()

router.post('/send_email', (req, res) => {

    const {name, email, phone, message} = req.body

    var HTMLContent = `
        <div align='center'>
            <h1>Hola Santiago, mi nombre es ${name} y quiero contactarte...</h1>
            <h2>${message}</h2>
            <h3>Mi información de contacto es:</h3>
            <h3>Email: ${email}</h3>
            <h3>Número de celular: ${phone}</h3>
        </div>
        `

    if(phone === ''){

        HTMLContent = `
        <div align='center'>
            <h1>Hola Santiago, mi nombre es ${name} y quiero contactarte...</h1>
            <h2>${message}</h2>
            <h3>Mi información de contacto es:</h3>
            <h3>Email: ${email}</h3>
        </div>
        `
    }

    const USER = process.env.USER
    const PASSWORD = process.env.PASSWORD
    const SECURE_PORT = process.env.SECURE_PORT
    const EMAIL = process.env.EMAIL

    async function sendEmail(){

        try{

            const transporter = nodemailer.createTransport({

                host: 'smtp.gmail.com',
                port: SECURE_PORT,
                secure: true,
                auth:{
                    user: USER,
                    pass: PASSWORD
                }
            })

            const mail_options = {

                from: "Mi Portafolio Web <"+USER+">",
                to: EMAIL,
                subject: 'Quiero contactarte',
                html: HTMLContent
            }

            const result = await transporter.sendMail(mail_options)
            return result

        }catch(err){
            console.log(err)
            transporter.close()
        }
    }

    sendEmail()
        .then(result => res.json())
        .catch((err) => console.log(err.message))
})

module.exports = router