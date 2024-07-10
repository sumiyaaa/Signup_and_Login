const express = require('express');
const path =  require('path');
const bcrypt = require('bcrypt');
const collection = require("./config");


const app = express();
//convert data into json formate
app.use(express.json());

//convert data into urlencoded formate
app.use(express.urlencoded({extended:false}));

//use EJS as the view engine 
app.set('view engine', 'ejs');
// static file
// this for attaching style file
// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, '..', 'public')));

app.get("/", (req, res)=>{
    res.render("login");
});

app.get("/signup", (req, res)=>{
    res.render("signup");
});

// user registration.
app.post("/signup", async (req,res)=>{
    const data = {
        name: req.body.username,
        password: req.body.password
    }
    const userdata = await collection.insertMany(data);
});

const port = 5000;
app.listen(port, () => console.log(`Server running on port ${port}.`));





// const express = require('express');
// const bodyParser = require('body-parser');
// const bcrypt = require('bcryptjs');
// const User = require('./config'); // Import the User model

// const app = express();
// const port = 5000;

// // Middleware
// app.use(bodyParser.urlencoded({ extended: true }));

// // Signup route
// app.post('/signup', async (req, res) => {
//     const { name, password } = req.body;

//     // Hash the password before saving
//     const hashedPassword = await bcrypt.hash(password, 10);

//     const newUser = new User({ name, password: hashedPassword });
//     await newUser.save();

//     res.send('Registration successful');
// });

// // Login route
// app.post('/login', async (req, res) => {
//     const { name, password } = req.body;
//     const user = await User.findOne({ name });

//     if (user && await bcrypt.compare(password, user.password)) {
//         res.send('Login successful');
//     } else {
//         res.send('Invalid username or password');
//     }
// });

// // Start server
// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });
