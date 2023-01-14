import express from 'express';
import protect from '../middleware/authMiddleware.js';
import admin from '../middleware/authAdmin.js';
import {
    createUser,
    loginUser,
    deleteUser,
    getAllUsers,
    updateUser,
    getCurrentUser,
} from './../controllers/userController.js';

const router = express.Router();

router.route('/').post(createUser).get(admin, getAllUsers);
router.route('/login').post(loginUser);
router.route('/:id').delete(admin, deleteUser).put(protect, updateUser);
router.route('/getCurrentUser').get(protect, getCurrentUser);

export default router;
