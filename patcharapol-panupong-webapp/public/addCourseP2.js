
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
// let form = document.querySelector('#c-form')
// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     let cname = document.getElementById('cname').value;
//     let instrut = document.getElementById('instrut').value;
//     let instit = document.getElementById('instit').value;
//     let price = document.getElementById('price').value;
//     let loca = document.getElementById('loca').value;
//     let total_t = document.getElementById('amountCourse').value;
//     let t_type = document.getElementById('timeType').value;
//     let s_date = document.getElementById('startDate').value;
//     let e_date = document.getElementById('endDate').value;
//     let study = ['{wednesday,20:00,24:00}'];
//     db.collection('profiles').doc(m).collection('myprofiles').doc(pid).collection('mycourses').add({
//         cname: cname,
//         instructor: instrut,
//         institute: instit,
//         price: price,
//         location: loca,
//         total_time: total_t,
//         time_type: t_type,
//         start_date: s_date,
//         end_date: e_date,
//         study_day: study,
//         learned_time: 0
//     })
//     .then(function(docRef) {
//         alert('New course added succesfully!');
//         db.collection('profiles').doc(m).collection('myprofiles').doc(pid).update({
//             "active_course": 3,
//             "total_cost": 17600
//         })
//         .then(function() {
//             console.log("Document successfully updated!");
//             location.href = `/courses`;
//         });
//     })
// });
document.getElementsByClassName("backBtn")[0].onclick = function () {
    var addCoursePage = document.getElementById("course-form");
    var addCoursePage2 = document.getElementById("addCoursePage2");
    addCoursePage2.style.display = "none";
    addCoursePage.style.display = "block";
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