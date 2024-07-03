const { v4: uuidv4 } = require("uuid"); 
const jwt = require('jsonwebtoken');    
const helper = require("./middleware");
const users = require("./usersData");



const createUser = (req,res) => {
    const { username, phone, email, fullname, password } =req.body;
    console.log(req.body)
    if (username && phone && email && fullname && password) {
        const id = uuidv4();
        const tasks =[];
        const userData = {
            id,
            email,
            username,
            phone,
            password,
            fullname,
            tasks
        }
        users[username] = userData;
        let data = JSON.stringify(users[username].username)
        let authToken = helper.generateToken(username);
        res.status(200).json({ message: `Registered Successfully`, username: username  ,authToken})
    }
    else{
        res.status(400).json({ message: "Please fill all the fields" })
    }
}


const loginUser = (req,res) =>{
    const { username, password } = req.body;
    console.log(req.body);
    // const userFound = users.find(userFound => userFound.username == username && userFound.password == password)
    if(users[username] && users[username].password){
        let authToken = helper.generateToken(username);
        res.status(200).json({ message: "Logged In Successfully" , username: username,authToken})
    }
    else{
        res.status(400).json({ message: "Invalid Username and Password" })
    }
}


module.exports = {
    createUser,
    loginUser
}