import jwt, { decode } from 'jsonwebtoken';
import User from './../models/userModel.js';

const admin = async (req, res, next) => {
    let token;

    try {
        // Get token
        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
            token = req.headers.authorization.split(' ')[1];
        }

        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findById(decoded.id).select('-password');

        if (user.role !== 'admin') {
            res.status(401);
            throw new Error('Not authorized');
        }
        req.user = user;
        next();
    } catch (error) {
        res.status(401);
        throw new Error('Not authorized');
    }
};

export default admin;
