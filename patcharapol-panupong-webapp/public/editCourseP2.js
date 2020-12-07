var endDateCheck = document.querySelector("input[name=enableEnd]");
endDateCheck.addEventListener('change', function() {
    if(this.checked) {
        document.getElementById('endDate').disabled = false;
    } else {
        document.getElementById('endDate').disabled = true;
    }
});

var dayCheck = document.querySelectorAll("input[class=dayCheck]")
for (day of dayCheck) {
    day.addEventListener('change', function() {
        if (this.checked) {
            var dayEnable = document.getElementsByClassName(this.name);
            for (n of dayEnable) {
                n.disabled = false;
            }
        } else {
            var dayEnable = document.getElementsByClassName(this.name);
            for (n of dayEnable) {
                n.disabled = true;
            }
        };
    });
}


document.getElementsByClassName("confirmBtn")[0].onclick = function () {
    location.href = "/courses";
};
document.getElementsByClassName("cancelBtn")[0].onclick = function () {
    location.href = "/courses";
};
document.getElementsByClassName("backBtn")[0].onclick = function () {
    location.href = "/editCourse";
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
