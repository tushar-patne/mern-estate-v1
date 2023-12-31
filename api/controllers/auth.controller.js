import bcryptjs from 'bcryptjs';
import User from '../models/user.model.js';
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken';

export const signup = async (req, res, next) => {
    const {username, email, password} = req.body;
    try {
        const hashedPassword = bcryptjs.hashSync(password, 10);
        const newUser = new User({username, email, password: hashedPassword});
        await newUser.save();
        return res.status(201).json({
            success: true,
            message: "User created successfully!",
            newUser
        });
    } catch (error) {
        return next(error);
    }
};


export const signin = async (req, res, next) => {
    try {
        const {email, password} = req.body;
        const validUser = await User.findOne({email});
        if(!validUser){
            return next(errorHandler(404, "User not found!"));
        }
        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if(!validPassword){
            return next(errorHandler(401, "Wrong credentials!"));
        }
        const {password: hashedPassword, ...userInfoWithoutPassword} = validUser._doc;
        const token = jwt.sign({id: validUser._id}, process.env.JWT_SECRETE);
        const expiryDate = Date(Date.now() + 3600000);
        res
            .cookie('access_token', token, {expire: expiryDate, httpOnly: true})
            .status(200)
            .json({
                success: true,
                message: "User login successful",
                userInfoWithoutPassword
            })
    } catch (error) {
        return next(error);
    }
}