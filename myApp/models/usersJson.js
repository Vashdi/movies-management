const jsonDal = require('../DAL/jsonDAL');

const getUserByUsername = async function(username){
    let data = await jsonDal.getUsers();
    let users = data.users;
    let ourUser = users.filter(user => user.username == username);
    return ourUser[0];
}

const updateUser = async function(username,newUsername, newPassword){
    await jsonDal.deleteUser(username);
    await jsonDal.addUSer(newUsername, newPassword);
}

const isExsit = async function(username,pwd){
    let data = await jsonDal.getUsers();
    let checkUsers = data.users;
    let obj = checkUsers.find(currUser => currUser.username == username && currUser.pwd == pwd);
    if(obj)
        return true;
    else
        return false;
}

const addToJSON = async function(username, pwd){
    let today = new Date().toISOString().slice(0, 10);
    let obj = {username: username, pwd: pwd, date: today};
    let status  = await jsonDal.addUSer(obj);
    return status;
}

module.exports = {isExsit, addToJSON, getUserByUsername, updateUser};