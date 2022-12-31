import User from './../models/userModel.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const createUser = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        res.status(400);
        throw new Error('Please add all fields');
    }
    const userExists = await User.findOne({ username });

    if (userExists) {
        res.status(400);
        throw new Error('User already exists');
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({ username, password: hashedPassword });
    if (user) {
        res.status(200).json({ _id: user.id, username: user.username, token: generateJWT(user.id) });
    } else {
        res.status(400);
        throw new Error('Invalid user data');
    }
};

const loginUser = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        res.status(400);
        throw new Error('Complete all fields');
    }

    const user = await User.findOne({ username });

    if (user && (await bcrypt.compare(password, user.password))) {
        res.status(200).json({ _id: user.id, username: user.username, token: generateJWT(user.id, user.role) });
    } else {
        res.status(400);
        throw new Error('Invalid credentials');
    }
};

const getAllUsers = async (req, res) => {
    const allUsers = await User.find({}).select('-password');

    res.status(200).json({ allUsers });
};

const deleteUser = async (req, res) => {
    const userExists = await User.findById(req.params.id);

    if (!userExists) {
        res.status(400);
        throw new Error("User doesn't exist");
    }

    await userExists.remove();
    res.status(200).json({ id: req.params.id });
};
const updateUser = async (req, res) => {
    res.status(200).json({ message: 'Updating user' });
};

const generateJWT = (id, role) => {
    return jwt.sign({ _id: id, role: role }, process.env.JWT_SECRET, { expiresIn: '15d' });
};

export { createUser, loginUser, deleteUser, getAllUsers, updateUser };
