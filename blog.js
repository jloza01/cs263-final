var users = {
    user1: "Pass"
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
    var un = document.getElementById("username").value;
    var pw = document.getElementById("password").value;

    if (users[un] == pw){
        document.getElementById('Test1').innerHTML = "Logged in as: " + un
        document.getElementById('signin').remove()
    }
    else{
        document.getElementById('Test1').innerHTML = "Incorrect Password or Username"
    }
};
