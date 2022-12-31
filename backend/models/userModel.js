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
        enum: ['user', 'admin'],
        default: 'user',
    },
});

export default mongoose.model('User', userSchema);
