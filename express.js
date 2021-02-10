const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const handler = (data) => {
    return (req, res) => {
        res.send(data)
    }       
};

//create routes 
app.get("/", handler("<h1>Welcome to my first Backend Server</h1>"))
app.get("/login", handler("<h1>Login Page</h1>"))
app.get("/register", handler("<h1>Register Page</h1>"))
app.get("/contact", handler("<h1>No Contact List</h1>"))


app.listen(port, () => console.log(`Server running on port ${port}`))