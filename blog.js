var users = {
    user1: "Pass"
};
var un;
var pw;

function getInfo(){
    var un = document.getElementById("username").value;
    var pw = document.getElementById("password").value;

    if (users[un] == pw){
        document.getElementById('Test1').innerHTML = "Logged in as: "
        document.getElementById('User').innerHTML = un
        document.getElementById('signin').remove()
    }
    else{
        document.getElementById('Test1').innerHTML = "Incorrect Password or Username"
    }
}; 
function enableLink(){
    var user = document.getElementById("User").innerHTML
    if (!user){ 
        document.getElementById('Test1').innerHTML = "Please Sign In First"
        return false;
    }
    else{
        var link = document.getElementById("blogpost1");
        link.href += "?user=" + user;
        return true;
    }
};