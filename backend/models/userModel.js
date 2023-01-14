import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please add username'],
    },
    password: {
        type: String,
        required: [true, 'Please add password'],
        minLength: 8,
    },
    role: {
        type: String,
        enum: ['guest', 'user', 'admin'],
        default: 'guest',
    },
});

export default mongoose.model('User', userSchema);
