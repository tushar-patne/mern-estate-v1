import bcryptjs from 'bcryptjs';
import User from '../models/user.model.js';

export const signup = async (req, res, next) => {
    const {username, email, password} = req.body;
    try {
        const hashedPassword = bcryptjs.hashSync(password, 10);
        const newUser = new User({username, email, password: hashedPassword});
        console.log('reached in sign up function');
        await newUser.save();
        return res.status(201).json({
            success: true,
            message: "User created successfully!",
            newUser
        });
    } catch (error) {
        next(error);
    }
};