import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
    // Add reference to user model
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    title: { type: String, required: true },
    content: { type: String, required: true },
    category: { type: String, required: true },
});

export default mongoose.model('Blog', blogSchema);
