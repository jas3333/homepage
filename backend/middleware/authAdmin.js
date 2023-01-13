import jwt, { decode } from 'jsonwebtoken';
import User from './../models/userModel.js';

const admin = async (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        throw new Error('Authentication Invalid');
    }

    try {
        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = await User.findById(decoded._id).select('-password');

        if (req.user.role !== 'admin') {
            res.status(401);
            throw new Error('Not authorized');
        }
        next();
    } catch (error) {
        res.status(401);
        throw new Error('Not authorized');
    }
};

export default admin;
