







var i = 0;
function disapDot() {
    i++;
    if (i == 1) {
        document.getElementById("bigdot").style.display = "none";
        document.getElementById("course-form").style.height = "800px";
    }
}

function showPreview(event) {
    if (event.target.files.length > 0) {
        var src = URL.createObjectURL(event.target.files[0]);
        var preview = document.getElementById("file-ip-1-preview");
        preview.src = src;
        document.getElementById("course-form").style.height = "1000px";
        preview.style.display = "block";
        preview.style.height = "200px";
        preview.style.margin = "0 auto";
        preview.style.borderRadius = "50%";

    }
}

document.getElementsByClassName("nextBtn")[0].onclick = function () {

    location.href = "/editCourseP2";
};
document.getElementsByClassName("cancelBtn")[0].onclick = function () {
    location.href = "/courses";
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

