import jwt, { decode } from 'jsonwebtoken';
import User from './../models/userModel.js';

const protect = async (req, res, next) => {
    let token;

    try {
        // Get token
        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
            token = req.headers.authorization.split(' ')[1];
        }

        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = await User.findById(decoded.id).select('-password');
        next();
    } catch (error) {
        res.status(401);
        throw new Error('Not authorized');
    }
};

export default protect;
