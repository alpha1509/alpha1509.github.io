//---email validator---

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

// let form = document.querySelector('#signup-form');

// form.addEventListener('submit', function () {
//     let em = document.getElementById('inputEmail').value;
//     let pw = document.getElementById('psw').value;
//     let fn = document.getElementById('fname').value;
//     let ln = document.getElementById('lname').value;
//     let fulln = fn + ' ' + ln;
//     db.collection('accounts').add({
//         email: em,
//         password: pw,
//         fullname: fulln
//     })
//     .then(function(docRef) {
//         console.log("Document written with ID: ", docRef.id);
//     })
//     .catch(function(error) {
//         console.error("Error adding document: ", error);
//     });
//     alert('Sign up successfully!');
// });

