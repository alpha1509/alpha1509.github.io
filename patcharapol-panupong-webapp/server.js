const express = require('express');
const path = require('path');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var fs = require("fs");
var cookieParser = require("cookie-parser");
const app = express();

const admin = require('firebase-admin');

const serviceAccount = require('./path/to/serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();


  



app.use(cookieParser());
app.set('views', path.join(__dirname, '/'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');


app.use('/static', express.static('public'));

app.get('/addCourse/:email/:pid', function(req, res) {
    res.sendFile(path.join(__dirname, '/addCourse.html'))
})
app.get('/calendar/:email/:pid', function(req, res) {
    res.sendFile(path.join(__dirname, '/calendar.html'))
})
app.get('/courses/:email/:pid', function(req, res) {
    res.sendFile(path.join(__dirname, '/courses.html'))
})
app.get('/editCourse', function(req, res) {
    res.sendFile(path.join(__dirname, '/editCourse.html'))
})
app.get('/login', function(req, res) {
    res.sendFile(path.join(__dirname, '/login.html'))
})
app.get('/profiles/:email', function(req, res) {
    var context = req.cookies["email"];
    console.log('logged in with email: ' + context);
    res.sendFile(path.join(__dirname, '/profiles.html'));

});
app.get('/sign-up', function(req, res) {
    res.sendFile(path.join(__dirname, '/sign-up.html'))
})
app.get('/statistics/:email/:pid', function(req, res) {
    res.sendFile(path.join(__dirname, '/statistics.html'))
})

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true}));

app.use(upload.array());

app.post('/sign-up', function(req, res) {
    // console.log(req.body);
    // let email = req.body.email;
    // let psw = req.body.psw;
    // let cfpsw = req.body.cfpsw;
    // let fullname = req.body.fname + ' ' + req.body.lname;
    // fs.readFile(__dirname + "/" + "account.json", "utf8", function (err,data) {
    //     obj = JSON.parse(data); //now it an object
    //     obj.push({
    //         email: email,
    //         password: psw,
    //         cfpassword: cfpsw,
    //         fullname: fullname
    //     }); //add some data

    //     json = JSON.stringify(obj); //convert it back to json
    //     fs.writeFile('account.json', json, 'utf-8', function(err, result) {
    //         if(err) console.log('error', err);
    //       }); // write it back 
    // });
    // fs.readFile(__dirname + "/" + "profile.json", "utf8", function (err,data) {
    //     obj = JSON.parse(data); //now it an object
    //     let info = `{"emails": {"${email}":[]}}`;
    //     info = JSON.parse(info);
    //     obj.push(info); //add some data
    //     json = JSON.stringify(obj); //convert it back to json
    //     fs.writeFile('profile.json', json, 'utf-8', function(err, result) {
    //         if(err) console.log('error', err);
    //       }); // write it back 
    // });

    console.log(req.body);
    let email = req.body.email;
    let psw = req.body.psw;
    let cfpsw = req.body.cfpsw;
    let fullname = req.body.fname + ' ' + req.body.lname;
    async function addAccount(db) {
        const docRef = db.collection('accounts');
    
        await docRef.add({
          email: email,
          password: psw,
          fullname: fullname
        });
        console.log('Sign up successfully!');
    }
    addAccount(db);

    res.redirect('/login');
});



app.post('/login', function(req, res) {
    // console.log(req.body);
    // let email = req.body.email;
    // let psw = req.body.psw;
    // fs.readFile(__dirname + "/" + "account.json", "utf8", function (err,data) {
    //     let obj = JSON.parse(data); //now it an object
    //     for (account of obj) {
    //         if(account.email === email){
    //             if(account.password === psw) {
    //                 res.cookie("email", email, { httpOnly: true });
    //                 res.redirect('/profiles'); 
    //             } else {
    //                 res.send('<script>alert("Email or password is incorrect, please try again."); window.location.href = "/login"; </script>');
    //             }
    //         } else {
    //             res.send('<script>alert("Email does not exist, please try again."); window.location.href = "/login"; </script>');
    //         }
    //     }
    // });
    res.clearCookie("email", { httpOnly: true });
    let inputmail = req.body.email;
    let inputpsw = req.body.psw;
    async function quickstartListen(db) {
        // [START quickstart_listen]
        // [START firestore_setup_dataset_read]
        const snapshot = await db.collection('accounts').get();
        snapshot.forEach((doc) => {
            console.log(doc.data());
            console.log(inputmail);
          if(doc.data().email === inputmail) {
              if(doc.data().password === inputpsw) {
                res.cookie("email", inputmail, { httpOnly: true });
                res.redirect('/profiles/'+inputmail); 
              } else {
                res.send('<script>alert("Email or password is incorrect, please try again."); location.href = "/login"; </script>');
              };
          };
        });
        res.send('<script>alert("Email does not exist, please try again."); location.href = "/login"; </script>');
        // [END firestore_setup_dataset_read]
        // [END quickstart_listen]
      }
    quickstartListen(db)
});

// app.post('/profiles', function(req, res) {
//     var context = req.cookies["email"];
//     async function addProfile(db) {
//         const docRef = db.collection('profiles').docs(context);
    
//         await docRef.set({
//           name: req.body.proname,
//           active_course: 0,
//           total_cost: 0
//         });
//         console.log('Profile added successfully!');
//     }
//     addProfile(db);
// });



var server = app.listen(3000, function () {
    var host = 'localhost';
    var port = server.address().port;
    console.log("App listening at http://%s:%s", host, port);
});