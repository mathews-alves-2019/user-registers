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
    if (!token) return res.status(401).json({ message: 'No token provided.' });

    jwt.verify(token, process.env.SECRET, (err) => {
        if (err) return res.status(500).json({ message: 'Failed to authenticate token.' });
        next();
    });
};
