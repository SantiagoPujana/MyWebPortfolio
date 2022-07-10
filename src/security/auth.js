const jwt = require('jsonwebtoken');
require('dotenv').config();

function generateToken(payload){

    let token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '3h' }, { algorithm: 'HS256' });
    return token;
}

function verifyToken(req, res, next){

    const bearerHeader =  req.headers['authorization'];

    if(typeof bearerHeader !== 'undefined'){

        if(bearerHeader.split(' ')[0] === 'Bearer'){

            const bearerToken = bearerHeader.split(' ')[1];

            jwt.verify(bearerToken, process.env.JWT_SECRET, (err, auth_data) => {

                if (err) {
                    res.status(403).json({ ok: false, status: 403, message: 'Forbidden' });
                }else{

                    req.token = bearerToken;
                    next();
                }
            });
        }
        else{
            res.status(400).json({ ok: false, status: 400, message: 'Bad Request' });
        }
    }
    else{
        res.status(403).json({ ok: false, status: 403, message: 'Forbidden' });
    }
}

module.exports= {

    generateToken : generateToken,
    verifyToken : verifyToken
}