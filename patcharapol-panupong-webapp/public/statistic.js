var login_email = window.location.href;
var queryUrl = login_email.replace('http://localhost:3000/statistics/','')
const m = (queryUrl.split('/'))[0];
const pid = (queryUrl.split('/'))[1];
console.log(m);
console.log(pid);

document.getElementsByClassName("coursesTab")[0].onclick = function () {
    location.href = `/courses/${m}/${pid}`;
 };
 document.getElementsByClassName("calendarTab")[0].onclick = function () {
    location.href = `/calendar/${m}/${pid}`
 };

//-----**functions for responsive navigation bar**--------
function responNavbar() {
   var x = document.getElementById("myTopnav");
   if (x.className === "topnav") {
       x.className += " responsive";
   } else {
       x.className = "topnav";
   }
}
function screenWidth(x) {
   if (x.matches) { // If media query matches
       document.getElementById('logout-first').style.display = "none";
       document.getElementById('logout-second').style.display = "";
   } else {
       document.getElementById('logout-first').style.display = "flex";
       document.getElementById('logout-second').style.display = "none";
   }
}
var x = window.matchMedia("(max-width: 700px)")
screenWidth(x) // Call listener function at run time
x.addListener(screenWidth) // Attach listener function on state changes
//--------**End of functions for responsive navigation bar**-------