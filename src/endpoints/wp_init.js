const router = require('express').Router();
const jwt = require('../security/auth');

router.post("/init", (req, res) => {

    try {

        if(req.body.source === 'web_portfolio_user'){

            let token = jwt.generateToken({ user: 'web_portfolio_user' });

            res.set({
                authorization: token,
                'access-control-expose-headers': 'authorization'
            }).json({ ok: true, status: 200, token });
        }
        else{
            res.json({ ok: false, status: 400, message: 'No valid data' });
        }
    }
    catch(err){
        res.json({ ok: false, status: 400, message: 'Bad request' });
    }
});

module.exports = router;