// const mongoose = require("mongoose");
// const connect = mongoose.connect("mongodb://localhost:27017/Login");

// // check the database is connected or not
// connect.then(() => {
//     console.log("Database connected successfully");
// })
// .catch(() => {
//     console.log("Database connection failed");
// });

// // create a schema
// const LoginSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     password: {
//         type: String,
//         required: true
//     }
// });

// // collection part
// const User = mongoose.model("User", LoginSchema);

// // Function to add a new user
// const addUser = async (name, password) => {
//     const newUser = new User({ name, password });
//     try {
//         await newUser.save();
//         console.log('User saved successfully');
//     } catch (error) {
//         console.log('Error saving user:', error);
//     }
// };

// // Example usage
// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// readline.question('Enter username: ', (name) => {
//     readline.question('Enter password: ', (password) => {
//         addUser(name, password).then(() => {
//             readline.close();
//         });
//     });
// });

// module.exports = User;


// signup-project/config.js
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Login", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Database connected successfully"))
    .catch(() => console.log("Database connection failed"));

const LoginSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const User = mongoose.model("User", LoginSchema);

module.exports = User;
