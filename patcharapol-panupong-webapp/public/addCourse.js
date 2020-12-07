var login_email = window.location.href;
var queryUrl = login_email.replace('http://localhost:3000/addCourse/','')
const m = (queryUrl.split('/'))[0];
const pid = (queryUrl.split('/'))[1];
console.log(m);
console.log(pid);
 
 
 // var i = 0;
        // function disapDot() {
        //     i++;
        //     if (i == 1) {
        //         document.getElementById("bigdot").style.display = "none";
        //         document.getElementById("course-form").style.height = "800px";
        //     }
        // }

        function showPreview(event) {
            if (event.target.files.length > 0) {
                var src = URL.createObjectURL(event.target.files[0]);
                var preview = document.getElementById("file-ip-1-preview");
                preview.src = src;
                document.getElementById("course-form").style.height = "950px";
                preview.style.display = "block";
                preview.style.height = "200px";
                preview.style.margin = "0 auto";
                preview.style.borderRadius = "50%";

            }
        }

        document.getElementsByClassName("nextBtn")[0].onclick = function () {
            var addCoursePage = document.getElementById("course-form");
            var addCoursePage2 = document.getElementById("addCoursePage2");
            addCoursePage.style.display = "none";
            addCoursePage2.style.display = "block";
            
        };
        document.getElementsByClassName("cancelBtn")[0].onclick = function () {
            location.href = `/courses`;
        };
        document.getElementsByClassName("cancelBtn")[1].onclick = function () {
            location.href = `/courses`;
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
        //--------**End of functions for responsive navigation bar**