import jwt, { decode } from 'jsonwebtoken';
import User from './../models/userModel.js';

const protect = async (req, res, next) => {
    const token = req.cookies.token;
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id).select('-password');

        if (!req.user.role === 'admin' || !req.user.role === 'user') {
            res.status(401);
            throw new Error('Not authorized to access this route');
        }

        next();
    } catch (error) {
        res.status(401);
        throw new Error('Not authorized');
    }
};

export default protect;
