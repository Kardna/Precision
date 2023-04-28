var site = getCurrentURL();
var name = new URL(site).host;
var url = 'bg' + '.' + name;
console.log(url);
function getCurrentURL () {
    return window.location.href
}

