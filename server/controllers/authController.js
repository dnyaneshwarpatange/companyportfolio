const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

const home = async (req, res) => {
    try {
        console.log(req.body);
        res.send("Welcome to my API (I am in auth Controller)");
    } catch (error) {
        console.error(error);
        res.status(500).send({ msg: "Something Went Wrong" });
    }
};

const register = async (req, res) => {
    try {
        const { username, email, phone, password } = req.body;

        // Check if user with the provided email already exists
        const userExists = await User.findOne({email});

        if (userExists) {
            return res.status(400).send({ msg: "User Already Exists" });
        }

        // Hash the password before saving
        // const hashedPassword = await bcrypt.hash(password, 10);

        // Create the user with the hashed password
        const userCreated = await User.create({ 
            username, 
            email, 
            phone, 
            password
        });

        // Return response with token and user ID
        res.status(201).json({
            msg: "User registered successfully",
            token: await userCreated.generateToken(),
            userId: userCreated._id.toString(),
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({ msg: "Something Went Wrong with Registration" });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user with the provided email exists
        const userExist = await User.findOne({ email });
        console.log(userExist)

        if (!userExist) {
            return res.status(400).send({ msg: "User Does Not Exist" });
        }

        // Compare hashed password with the provided password
        const user = await bcrypt.compare(password, userExist.password);
        // const isPasswordValid = await password == userExist.password;
        // console.log(isPasswordValid);


        if (user) {
            res.status(200).json({
                msg: "Login Successful",
                token: await userExist.generateToken(),
                userId: userExist._id.toString(),
            });
        } else {
            res.status(400).send({ msg: "Invalid Credentials" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Internal server error" });
    }
};

module.exports = { home, register, login };
