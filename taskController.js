const users = require("./usersData")

const createTask = (req, res) => {
    const { taskname } = req.body;
    console.log(req.body)
    const username = req.username
    if (!users[username]) {
        res.status(400).send("User not found");
    }
    users[username].tasks.push(taskname);
    res.status(200).send(`Task added to the your list`)
    console.log(users);
}

const getUserTask = (req,res)=>{
    const username = req.username;
    if (!users[username]) {
        return res.status(400).send("User not found");
    }
    res.status(200).json({ tasks: users[username].tasks });
};

module.exports = {
    createTask,
    getUserTask
}