//---email validator----
var btn = document.getElementById('signup');
btn.onclick = checkEmail();

function checkEmail() {
    var inputEmail = document.getElementById("inputEmail").value;
    var unirest = require("unirest");
    var req = unirest("GET", "https://rapidapi.p.rapidapi.com/v2/validate");
    req.query({
        "ip_address": inputEmail,
        "email": inputEmail
    });
    req.headers({
        "x-rapidapi-key": "a005cde6ffmsh1a4cf16de2469efp176760jsn236def3507e3",
        "x-rapidapi-host": "zerobounce1.p.rapidapi.com",
        "useQueryString": true
    });
    req.end(function (res) {
        if (res.error) throw new Error(res.error);
        console.log(res.body);
    });
    var status = req.body.status;
    var did_you_mean = req.body.did_you_mean;
    if (status === 'invalid') {
        if (did_you_mean != null) {
            alert('Email address is invalid, please enter again.\nDid you mean "' + did_you_mean + '"');
        }
        alert('Email address is invalid, please enter again.');
    }
};


//----redirection-----
document.getElementsByClassName('ResetpassBtn')[0].onclick = function() {
    location.href = "/login"
}