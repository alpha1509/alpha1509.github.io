document.getElementsByClassName('loginBtn')[0].onclick = function() {
    location.href = "../profiles";
}
//    
// let login_correct = false;
// let form = document.querySelector('#login-form');
// form.addEventListener('submit', (e) => {
//     e.preventDefault;
//     let em = document.getElementById('email').value;
//     let psw = document.getElementById('psw').value;
//     db.collection('accounts').get().then(user => {
//         user.docs.forEach(doc => {
//             if (em === doc.data().email) {
//                 if (psw === doc.data().password) {
//                     document.getElementById('logcon').value = "correct";
//                     console.log(document.getElementById('logcon').value + ' JS');
//                 } else {
//                     alert("Email or password is incorrect, please try again.");
//                 }
//             } else {
//                 alert("Email does not exist, please try again.");
//             }
//         })
//     });
// })

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    $(".g-singin2").css("display", "none");
    $(".data").css("display", "block");
    $("#picUser").attr('src', profile.getImageUrl());
    $("#name").text(profile.getName());
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function() {
        alert("You have been signed out");
        $(".g-singin2").css("display", "block");
        $(".data").css("display", "none");
    });

}
