
function renderTime() {
    var mydate = new Date();
    var year = mydate.getFullYear();
    if (year < 1000) {
        year += 1900

    }
    var day = mydate.getDay();
    var month = mydate.getMonth();
    var date = mydate.getDate();
    var dayarray = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
    var montharray = new Array("January","February","March","April","May","June","July","August","September","October","November","December");


    var myClock = document.getElementById("clockDisplay");
    myClock.textContent =  "" + dayarray[day] +  ", " + date  + " " + montharray[month] + " " +
     year ;
     myClock.innerText =  "" + dayarray[day] +  ", " + date  + " " + montharray[month] + " " +
     year ;

     setTimeout("renderTime()", 1000);
}

renderTime();