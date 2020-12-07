var login_email = window.location.href;
var queryUrl = login_email.replace('http://localhost:3000/calendar/','')
const m = (queryUrl.split('/'))[0];
const pid = (queryUrl.split('/'))[1];
console.log(m);
console.log(pid);

document.getElementsByClassName("coursesTab")[0].onclick = function () {
    location.href = `/courses`;
 };
 document.getElementsByClassName("statTab")[0].onclick = function () {
    location.href = `/statistics`
 };

        document.addEventListener('DOMContentLoaded', function () {
            var calendarEl = document.getElementById('the-calendar');

            var calendar = new FullCalendar.Calendar(calendarEl, {
                initialView: 'dayGridMonth',
                initialDate: '2020-11-07',
                headerToolbar: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay'
                },
                events: [
                    {
                        groupId: '999',
                        title: 'Computer Programming',
                        start: '2020-11-02T09:00:00'
                    },
                    {
                      groupId: '999',
                      title: 'Computer Programming',
                      start: '2020-11-06T13:00:00'
                    },
                    {
                        groupId: '999',
                        title: 'Computer Programming',
                        start: '2020-11-09T09:00:00'
                      },
                      {
                        groupId: '999',
                        title: 'Computer Programming',
                        start: '2020-11-13T13:00:00'
                      },
                      {
                        groupId: '999',
                        title: 'Computer Programming',
                        start: '2020-11-16T09:00:00'
                      },
                      {
                        groupId: '999',
                        title: 'Computer Programming',
                        start: '2020-11-20T13:00:00'
                      },
                      {
                        groupId: '999',
                        title: 'Computer Programming',
                        start: '2020-11-23T09:00:00'
                      },
                      {
                        groupId: '999',
                        title: 'Computer Programming',
                        start: '2020-11-27T13:00:00'
                      },
                      {
                        groupId: '999',
                        title: 'Computer Programming',
                        start: '2020-11-30T09:00:00'
                      },
                      {
                        groupId: '999',
                        title: 'Computer Programming',
                        start: '2020-12-04T13:00:00'
                      },
                      {
                        groupId: '999',
                        title: 'Computer Programming',
                        start: '2020-12-07T09:00:00'
                      },
                      {
                        groupId: '999',
                        title: 'Computer Programming',
                        start: '2020-12-11T13:00:00'
                      },
                      {
                        groupId: '999',
                        title: 'Computer Programming',
                        start: '2020-12-14T09:00:00'
                      },
                      {
                        groupId: '999',
                        title: 'Computer Programming',
                        start: '2020-12-18T13:00:00'
                      },
                      {
                        groupId: '999',
                        title: 'Computer Programming',
                        start: '2020-12-21T09:00:00'
                      },
                      {
                        groupId: '999',
                        title: 'Computer Programming',
                        start: '2020-12-25T13:00:00'
                      },
                      {
                        groupId: '999',
                        title: 'Computer Programming',
                        start: '2020-12-28T09:00:00'
                      },
                      {
                        groupId: '999',
                        title: 'Computer Programming',
                        start: '2021-01-01T13:00:00'
                      },
                      {
                        groupId: '999',
                        title: 'Computer Programming',
                        start: '2021-01-04T09:00:00'
                      },
                      {
                        groupId: '999',
                        title: 'Computer Programming',
                        start: '2021-01-08T13:00:00'
                      },
                      {
                        groupId: '998',
                        title: 'Drawing',
                        start: '2020-12-17T18:30:00'
                      },
                      {
                        groupId: '998',
                        title: 'Drawing',
                        start: '2020-12-24T18:30:00'
                      },
                      {
                        groupId: '998',
                        title: 'Drawing',
                        start: '2020-12-31T18:30:00'
                      },
                      {
                        groupId: '998',
                        title: 'Drawing',
                        start: '2021-01-07T18:30:00'
                      },
                      {
                        groupId: '777',
                        title: 'Machine Learning',
                        start: '2020-12-09T20:00:00'
                      },
                      {
                        groupId: '777',
                        title: 'Machine Learning',
                        start: '2020-12-16T20:00:00'
                      },
                      {
                        groupId: '777',
                        title: 'Machine Learning',
                        start: '2020-12-23T20:00:00'
                      }
                  ]
            });

            calendar.render();
        });
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