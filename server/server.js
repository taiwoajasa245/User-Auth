const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const connectDB = require('./config/connectDB');
const handleGlobalError = require('./middleware/errorMiddleware');
const auth = require('./routes/authRoute'); 
const dotenv = require('dotenv');
const app = express();
dotenv.config();




// connect database
connectDB();


// middleware 
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
// Route 



app.get('/', (req, res) => {
    res.redirect('/api/home')
})

app.get('/', (req, res) => {
    res.status(200).json({message: "Welcome to Api home page", data: [
        { 
            login_endpoints: "/api/auth/login", 
        }
    ] })
})


app.use("/api/auth/", auth);


// Error handles Globally
// Catch-all route for handling unknown endpoints
app.all('*', (req, res) => {
    res.status(404).json({ status: "unknown endpoint", message: 'Endpoint not found', data: [] });
});


// mongo-Connection
mongoose.connection.once('open', () => {

    const PORT = process.env.PORT || 4000;
    try {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => { console.log(`listening for request on ${PORT}`) });
    } catch (error) {
        console.log("Unable to connect to MongoDB ", error);
    }

});
