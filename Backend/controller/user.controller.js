import User  from "../model/user.model.js";
import bcryptjs from "bcryptjs";


export const signup = async (req, res) => {
    try {
        const {fullname, email, password} = req.body;
        const user = await User.findOne({email});
        if(user) return res.status(400).json({message: "User already exists"});

        const hashedPassword = await bcryptjs.hash(password, 12);

        const newUser = new User({fullname, email, password: hashedPassword});
        await newUser.save();
        res.status(201).json({message: "User created successfully", user:{
            id: newUser.id,
            fullname: newUser.fullname,
            email: newUser.email
        }});
    
    } catch (error) {
        console.log(error);

        res.status(500).json({message: "Something went wrong"});
    }
}

export const login = async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({
            email
        });
        if(!user) return res.status(400).json({message: "Invalid credentials"});
        const isMatch = await bcryptjs.compare(password, user.password);
        if(!isMatch) return res.status(400).json({message: "Invalid credentials"});
        res.status(200).json({message: "Login successful", user:{
            id: user.id,
            fullname: user.fullname,
            email: user.email
        }});

    }
    catch (error) {
        console.log(error);
        res.status(500).json({message: "Something went wrong"});
    }
}