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
        res
            .cookie('access_token', token, {httpOnly: true})
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

export const google = async (req, res, next) => {
    try {
        const user = await User.findOne({email: req.body.email});
        if(user){
            const token = jwt.sign({id: user.id}, process.env.JWT_SECRETE);
            const {password: pass, ...userInfoWithoutPassword} = user._doc;
            res
                .cookie('access_token', token, {httpOnly: true})
                .status(200)
                .json(userInfoWithoutPassword);
        }
        else{
            const generatedPassword = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);
            const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);
            const username = req.body.name.split(" ").join("").toLowerCase() + Math.random().toString(36).slice(-4);
            const newUser = new User({username: username, email: req.body.email, password: hashedPassword, avatar: req.body.photo});
            await newUser.save();
            const token = jwt.sign({id: newUser._id}, process.env.JWT_SECRETE);
            const {password: pass, ...userInfoWithoutPassword} = newUser._doc;
            res
                .cookie('access_token', token, {httpOnly: true})
                .status(200)
                .json(userInfoWithoutPassword);
        }
    } catch (error) {
        return next(error);
    }
}