// const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');

// const app = express();
// const PORT = 5000;

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/Login', { useNewUrlParser: true, useUnifiedTopology: true });

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', () => {
//   console.log('Connected to MongoDB');
// });

// // Middleware
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// // User Schema
// const userSchema = new mongoose.Schema({
//   username: String,
//   password: String
// });

// const User = mongoose.model('User', userSchema);

// // Login Route
// app.post('/login', async (req, res) => {
//   const { username, password } = req.body;

//   // Create a new user document
//   const newUser = new User({
//     username,
//     password
//   });

//   try {
//     // Save the user to the database
//     await newUser.save();
//     res.send('User saved successfully');
//   } catch (error) {
//     res.status(500).send('Error saving user');
//   }
// });

// // Serve static files (CSS, JS)
// app.use(express.static(__dirname + '/public'));

// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });
