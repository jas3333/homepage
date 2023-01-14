import jwt from 'jsonwebtoken';
import User from './../models/userModel.js';

const check = async (req, res, next) => {
    const token = req.cookies.token;

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded.username);
        req.user = await User.findById(decoded._id).select('-password');
        next();
    } catch (error) {
        res.status(401);
        throw new Error('Not authorized');
    }
};

export default check;
