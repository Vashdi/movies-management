const jFile = require('jsonfile');

const getUsers = function(){
    return new Promise((resolve, reject) => {
        jFile.readFile('users.json', function(err,data) {
            if(err)
                reject(err);
            else
                resolve(data);
        })
    })
}

const deleteUser = function(username, password){
    return new Promise((resolve, reject) => {
        jFile.readFile('users.json', function(err, data){
            let usersArr = data.users; 
            let retUsers = usersArr.filter(user => user.username != username);
            let retInJson = {users : retUsers};
            jFile.writeFile('users.json', retInJson, function(err){
                if(err)
                    reject(err);
                else
                    resolve("ok");
            })
        })
    })
}

const addUSer = function(username, password){
    return new Promise((resolve, reject) => {
        jFile.readFile('users.json', function(err, data){
            let obj = {username : username, pwd: password};
            data.users.push(obj);
            let users = data;
            jFile.writeFile('users.json', users,function(err){
                if(err)
                    reject(err);
                else
                    resolve("ok");
            })
        })
    })
}


module.exports = {getUsers, addUSer, deleteUser};