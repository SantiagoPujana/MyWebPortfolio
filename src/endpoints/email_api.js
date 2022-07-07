const router = require('express').Router();
const sendEmail = require('../model/send_email');

router.post('/send_email', (req, res) => {

    sendEmail.prepareEmail(req.body).then(result => {
        res.json(result);
        res.status(result.status);
    });
});

module.exports = router;