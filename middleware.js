const users = require("./usersData")
const jwt = require('jsonwebtoken');

const secret = 'secretkey'

const userExists = (req, res, next) => {
    const { username } = req.body;
    // const userFind = users.find(u => u.username === username);
    if (users[username]) {
        return res.status(400).send("User already exists");
    }
    next();
}

const generateToken = (username) => {
    const token = jwt.sign({ username }, secret);
    return token
}

const tokenVerification = (req, res,next) => {
    const tokens = req.headers.authorization
    if (!tokens) {
        res.status(400).send("No token provided")
    }
    try {
        const decoded = jwt.verify(tokens, secret)
        req.username = decoded.username
        next();
    }
    catch {
        res.status(400).send("Invalid token")
    }

}


module.exports = {
    generateToken,
    userExists,
    tokenVerification
}