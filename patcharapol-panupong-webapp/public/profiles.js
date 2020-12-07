var login_email = window.location.href;
const m = login_email.replace('http://localhost:3000/profiles/','')
console.log(m);
var numberOfProf = '';

var delc = [];
var editc = [];
var profc = [];
db.collection('profiles').doc(m).collection('myprofiles').get().then(prof => {
    numberOfProf = prof.docs.length;
    let count = 1;
    prof.docs.forEach(doc => {
        let profID = doc.id;
        let at_c = doc.data().active_course;
        let tt_c = doc.data().total_cost;
        let pfcon = document.createElement('div');
        pfcon.classList.add("profile-con");
        pfcon.id = 'prof' + profID;
        pfcon.style.backgroundColor = getPastelColor();
        pfcon.innerHTML = '<div>'+
                `<img src="/static/pavatar.jpg" class="prof-avatar">`+
            '</div>'+
            `<div class="prof-name" id="profname${profID}">`+ doc.data().name +'</div>'+
            '<div class="edit-point">'+
               '<button class="edit-btn edit-course" id="edit'+profID+'"><i class="far fa-edit"></i></button>'+
                '<button class="edit-btn del-course" id="del'+profID+'"><i class="far fa-trash-alt"></i></button></div>'+
            '<div class="ttl-cost">Total Cost<div class="text-in-prof-con">'+tt_c+'</div></div>'+
            '<div class="atv-course">Active Course<div class="text-in-prof-con">'+at_c+'</div></div>';
        document.getElementById('container-of-courses').appendChild(pfcon);
    });
    delc = document.querySelectorAll('.del-course');
    editc = document.querySelectorAll('.edit-course');
    profc = document.querySelectorAll('.prof-name');
    addEventListenerToDelCourseBtn();
    addEventListenerToEditCourseBtn();
    addEventListenerToProfileBtn();
    console.log(delc.length);
});

console.log(delc.length + 'sec');


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("addButton");

// Get the <span> element that closes the modal
var cancel = document.getElementsByClassName("cancelBtn")[0];
var conf = document.getElementsByClassName("confirmBtn")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
cancel.onclick = function() {
    modal.style.display = "none";
}
conf.onclick = function() {
    numberOfProf += 1;
    modal.style.display = "none";
    let pname = document.getElementById('newpname').value;
    let profcon = document.createElement('div');
    let profileID = '';
    db.collection('profiles').doc(m).collection('myprofiles').add({
        name: pname,
        active_course: 0,
        total_cost: 0
    })
    .then(function(docRef) {
        profileID = docRef.id;
        console.log("Profile added with ID: ", docRef.id);
        profcon.classList.add("profile-con");
        profcon.id = 'prof' + profileID;
        profcon.style.backgroundColor = getPastelColor();
        profcon.innerHTML = '<div>'+
            `<img src="/static/pavatar.jpg" class="prof-avatar">`+
        '</div>'+
        `<div class="prof-name" id="profname${profileID}">`+ pname +'</div>'+
        '<div class="edit-point">'+
        '<button class="edit-btn edit-course" id="edit'+profileID+'"><i class="far fa-edit"></i></button>'+
            '<button class="edit-btn del-course" id="del'+profileID+'"><i class="far fa-trash-alt"></i></button></div>'+
        '<div class="ttl-cost">Total Cost<div class="text-in-prof-con">0</div></div>'+
        '<div class="atv-course">Active Course<div class="text-in-prof-con">0</div></div>';
        document.getElementById('container-of-courses').appendChild(profcon);
        document.getElementById('newpname').value = "";
        delc = document.querySelectorAll('.del-course');
        editc = document.querySelectorAll('.edit-course');
        profc = document.querySelectorAll('.prof-name');
        addEventListenerToDelCourseBtn();
        addEventListenerToEditCourseBtn();
        addEventListenerToProfileBtn();
    })
    .catch(function(error) {
        console.error("Error adding profile: ", error);
    });
}
function getPastelColor(){ 
    return "hsl(" + 360 * Math.random() + ',' +
                (35 + 50 * Math.random()) + '%,' + 
                (65 + 10 * Math.random()) + '%)';
}

function addEventListenerToDelCourseBtn() {
    for (button of delc) {
        button.addEventListener('click', function() {
            let thisID = this.id;
            thisID = thisID.replace('del','');
            let prof = document.getElementById('prof' + thisID);
            prof.remove();
            console.log(`prof${thisID}`);
            db.collection("profiles").doc(m).collection('myprofiles').doc(thisID).delete();
            delc = document.querySelectorAll('.del-course');
            editc = document.querySelectorAll('.edit-course');
            profc = document.querySelectorAll('.prof-name');
            addEventListenerToDelCourseBtn();
            addEventListenerToEditCourseBtn();
            addEventListenerToProfileBtn();
        }
    );
    }
}
// Get the modal
var emodal = document.getElementById("myEditModal");

// Get the <span> element that closes the modal
var ecancel = document.getElementsByClassName("cancelEditBtn")[0];
var econf = document.getElementsByClassName("saveBtn")[0];

function addEventListenerToEditCourseBtn() {
    for (button of editc) {
        button.addEventListener('click', function() {
            let thisID = this.id;
            thisID = thisID.replace('edit','');
            document.getElementById('editModalHeader').innerHTML = 'Editing ' + document.getElementById(`profname${thisID}`).innerHTML + "'s Profile";
            emodal.style.display = "block";
            let prof = document.getElementById('prof' + thisID);
             // When the user clicks on <span> (x), close the modal
            ecancel.onclick = function() {
                emodal.style.display = "none";
            }
            econf.onclick = function() {
                emodal.style.display = "none";
                let epname = document.getElementById('editpname').value;
                db.collection('profiles').doc(m).collection('myprofiles').doc(thisID).get().then(prof => {
                    let ac = prof.data().active_course;
                    let tc = prof.data().total_cost;
                    db.collection('profiles').doc(m).collection('myprofiles').doc(thisID).set({
                        name: epname,
                        active_course: ac,
                        total_cost: tc
                    });
                });
                document.getElementById('profname'+thisID).innerHTML = epname;
                document.getElementById('editpname').value = "";
                delc = document.querySelectorAll('.del-course');
                editc = document.querySelectorAll('.edit-course');
                profc = document.querySelectorAll('.prof-name');
                addEventListenerToDelCourseBtn();
                addEventListenerToEditCourseBtn();
                addEventListenerToProfileBtn();
            }
        }
    );
    }
}

function addEventListenerToProfileBtn() {
    for (button of profc) {
        button.addEventListener('click', function() {
            let thisID = (this.id).replace('profname','');
            location.href=`http://localhost:3000/courses/${m}/${thisID}` ;
        });
    };

};
addEventListenerToProfileBtn();

addEventListenerToEditCourseBtn();
addEventListenerToDelCourseBtn();


// When the user clicks anywhere outside of the modal, close it
/*
window.onclick = function(event) {
if (event.target == modal) {
    modal.style.display = "none";
}
}
*/

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
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