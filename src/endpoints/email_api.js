const router = require('express').Router();
const sendEmail = require('../services/send_email');
const jwt = require('../security/auth');

router.post('/send_email', jwt.verifyToken, async (req, res) => {

    await sendEmail.prepareEmail(req.body).then(result => {
        res.status(result.status).json(result);
    });
});

module.exports = router;