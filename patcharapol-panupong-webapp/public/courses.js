var login_email = window.location.href;
var queryUrl = login_email.replace('http://localhost:3000/courses/','')
const m = (queryUrl.split('/'))[0];
const pid = (queryUrl.split('/'))[1];
console.log(m);
console.log(pid);
db.collection('profiles').doc(m).collection('myprofiles').doc(pid).get().then(doc => {
    document.getElementById('headername').innerHTML = doc.data().name + "'s Profile";
})
db.collection('profiles').doc(m).collection('myprofiles').doc(pid).collection('mycourses').get().then(course => {
    console.log(course.docs.length);
    course.docs.forEach(doc => {
        console.log(doc.data().cname);
        let courseID = doc.id;
        let study_day = doc.data().study_day;
        let showClass = '';
        let dayarray = [];
        if (study_day.length > 0) {
            for (day of study_day){
                let d = day.replace("{","");
                d = d.replace("}","");
                let da = d.split(",");
                dayarray.push(da);
                showClass += `${da[0]}, ${da[1]} - ${da[2]}<br>`;
            }
        }
        let tt = doc.data().total_time;
        let lt = doc.data().learned_time;
        let progress = ((tt - lt)/tt)*100;
        progress = progress + "%";
        console.log(progress);
        let ccon = document.createElement('div');
        ccon.classList.add("courses-con");
        ccon.id = 'course' + courseID;
        ccon.innerHTML = '<div class="edit-point">' +
        `<button class="edit-btn edit-course" id="edit${courseID}"><i class="far fa-edit"></i></button>` +
        `<button class="edit-btn del-course" id="del${courseID}"><i class="far fa-trash-alt"></i></button></div>` +
        `<div class="courses-color-line-bg" style="background-color: ${getPastelColor()};"><div>` +
        '<img src="/static/book.png" class="course-img"></div>' +
        `<div class="course-name">${doc.data().cname}</div>`+
        `<div class="teacher">${doc.data().instructor}</div></div>`+
        '<div class="courese-remaining">'+
        '<div class="progress">'+
            '<div class="progress-cover">'+
                `<div class="progress-bar" style="width:${progress}">${progress}</div>`+
            `</div></div><div class="remainig">${tt - lt} ${doc.data().time_type} remaining.</div></div>`+
            `<p class="next-class">${showClass}</p>`+
        `<div class="location"><i class="fas fa-map-marker-alt locate-icon"></i>${doc.data().location}</div>`;
        document.getElementById('container-of-courses').appendChild(ccon);
    });
});
document.getElementsByClassName("addBtn")[0].onclick = function () {
    location.href = `/addCourse/${m}/${pid}`;
};

function getPastelColor(){ 
    return "hsl(" + 360 * Math.random() + ',' +
                (35 + 50 * Math.random()) + '%,' + 
                (65 + 10 * Math.random()) + '%)';
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function dropdownFunction() {
document.getElementById("myDropdown").classList.toggle("show");
}
 // Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
    }
    }
}
}

document.getElementsByClassName("calendarTab")[0].onclick = function () {
    location.href = `/calendar/${m}/${pid}`;
 };
 document.getElementsByClassName("statTab")[0].onclick = function () {
    location.href = `/statistics/${m}/${pid}`
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