var users = {
    user1: "Password"
};
class user{
    constructor(username, password){
        this.username = username;
        this.password = password;
    }
    get username(){
        return this.username
    }
    get password(){
        return this.password
    }
};

function getInfo(){
    var un = document.getElementById("username");
    var pw = document.getElementById("password");

    if (users.un == users.pw){
        document.getElementById('Test').innerHTML = Date()
    }
};
