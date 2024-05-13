function getUrlParameter(name) {
    name = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

var username = getUrlParameter('user');

if (username) {
    document.getElementById('userDisplay').textContent = username;
} else {
    document.getElementById('userDisplay').textContent = 'You are not logged in.';
}

function creatPost(){

}
