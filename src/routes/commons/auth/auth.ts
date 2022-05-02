import jwt from 'jsonwebtoken';

import dontenv from 'dotenv-safe';

dontenv.config();

export const getToken = (id: string, email: string) => {
    const token = jwt.sign({ id, email }, process.env.SECRET, {
        expiresIn: 30000,
    });
    return token;
};

export const verifyJWT = (req, res, next) => {
    const token = req.headers['x-access-token'];
    if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });

    jwt.verify(token, process.env.SECRET, (err, decoded) => {
        if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });

        console.log(decoded);
        next();
    });
};
