const User = require('../model/User');
const bcrypt = require('bcryptjs');
const generateToken = require('../utils/token');


const signup = async (req, res) => {

    const {

        name,
        email,
        password

    } = req.body;

    try {

        // Check if user already exists
        const checkUser = await User.findOne({ email });

        if (checkUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Create new user
        const user = new User({
            name,
            email,
            password
        });

        // Hash password
        const salt = await bcrypt.genSalt(12);
        user.password = await bcrypt.hash(password, salt);


        // Save user to database
        const savedUser = await user.save();
        const { role, ...user_data } = savedUser._doc;

        // JWT 
        const token = generateToken({ userId: user._id })


        // Return response if success
        res.status(201).json({
            status: "success",
            message: 'User registered successfully. Please input your details to login ',
            user: {
                id: user_data._id,
                name: user_data.name,
                email: user_data.email,
                role: user.role
            },
            token: token
        });


    } catch (err) {
        console.error(err.message);
        res.status(500).json({ status: "Error", message: 'Server Error' });

    }
};

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // find is user exits in database
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials, incorrect email ' });
        }

        // check if password matches
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials, Incorrect Password please try again' });
        }


        const token = generateToken({ userId: user._id });

        

        const { pass, ...user_data } = user._doc;

        res.status(200).json({
            status: "success",
            message: "You have successfully logged in.",
            user: {
                id: user_data._id,
                name: user_data.name,
                email: user_data.email,
                role: user.role
            },
            token: token,

        });


    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = {
    signup,
    login
}
