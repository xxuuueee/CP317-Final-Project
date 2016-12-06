/**
 * Created by admin on 11/13/16.
 */

//Global Variable
var user;

// Initialize Firebase
var config = {
    apiKey: "AIzaSyA5kBeLf09lwZBx_hFa0j73_2BaoKpfJZ8",
    authDomain: "cp317timetrack.firebaseapp.com",
    databaseURL: "https://cp317timetrack.firebaseio.com",
    storageBucket: "cp317timetrack.appspot.com",
    messagingSenderId: "800102312098"
};
firebase.initializeApp(config);
var database = firebase.database();



$( document ).on( "pageinit", function() {
//LOGIN BUTTON
    $("#login").click(function () {
            user = $("#user").val();
            var password = $("#password").val();
            var database=firebase.database();



// Checking for blank fields. LOGIN BUTTON
            if (user == '' || password == '') {
                $('input[type="text"],input[type="password"]').css("border", "2px solid red");
                $('input[type="text"],input[type="password"]').css("box-shadow", "0 0 3px red");
                alert("Please fill all fields");
            }
            else {

                firebase.database().ref('users/'+user).on("value",function(snapshot) {
                    var realPassword = snapshot.val().pass;

                    if (password == realPassword){

                        $.mobile.changePage("modifyHours.html",{
                            transition: "pop",
                            reverse: false,
                            changeHash: true
                        })



                    }
                    else{
                        alert("Enter the correct password")
                    }


                });
            }
        });

//THIS IS THE SIGNUP PAGE, NEW USER INPUTS INFO AND PRESSES BUTTON DONE
    $("#done").click(function () {
        var first = $("#fname").val();
        var last = $("#lname").val();
        var id = $("#id").val();
        var code = $("#code").val();
        var duser = $("#duser").val();
        var pass = $("#pass").val();
        var cpass = $("#cpassword").val();


        if (first == '' || last == '' || id == '' || code == '' || duser == '' || pass == '' || cpass == '') {
            alert("Please fill in the form");
        }
        else {
                var database = firebase.database();
                firebase.database().ref("users/"+duser).set({
                    user: duser,
                    pass:pass,
                    Amonday:0,
                    Atuesday:0,
                    Awednesday:0,
                    Athursday:0,
                    Afriday:0,
                    Asaturday:0,
                    Asunday:0,
                    Wmonday:0,
                    Wtuesday:0,
                    Wwednesday:0,
                    Wthursday:0,
                    Wfriday:0,
                    Wsaturday:0,
                    Wsunday:0

                })
                $.mobile.changePage("index.html", {
                    transition: "pop",
                    reverse: false,
                    changeHash: true
                });






        }
    });

//SIGNUP BUTTON IN INDEX PAGE
    $("#signup").click(function () {
        $.mobile.changePage("Signup.html", {
            transition: "pop",
            reverse: false,
            changeHash: true

        });

    });


//SUBMIT BUTTON IN MODIFYHOURS PAGE
    $("#submit").click(function() {
        var mon=$("#s1").val();
        var tue=$("#s2").val();
        var wed=$("#s3").val();
        var thu=$("#s4").val();
        var fri=$("#s5").val();
        var sat=$("#s6").val();
        var sun=$("#s7").val();
    if (checkHour(mon)&&checkHour(tue)&&checkHour(wed)&&checkHour(thu)&&checkHour(fri)&&checkHour(sat)&&checkHour(sun)){
        var database = firebase.database();
        firebase.database().ref("users/"+user).update({
            Amonday:mon,
            Atuesday:tue,
            Awednesday:wed,
            Athursday:thu,
            Afriday:fri,
            Asaturday:sat,
            Asunday:sun
        })
        alert("Availability hours have been updated successfully!");
    }
    else{

        alert("There is a problem with the submitted hours :(");

    }

    })


    //This weeks schedule display update
    $("#hours").click(function(){

        var database = firebase.database();
        firebase.database().ref("users/"+user).on("value", function(snapshot){
            $('#m').html(snapshot.val().Wmonday);
            $('#t').html(snapshot.val().Wtuesday);
            $('#w').html(snapshot.val().Wwednesday);
            $('#th').html(snapshot.val().Wthursday);
            $('#f').html(snapshot.val().Wfriday);
            $('#s').html(snapshot.val().Wsaturday);
            $('#sn').html(snapshot.val().Wsunday);
        })


    })

    //makes sure that a given number is between 0 and 24
function checkHour(number){
        return (number>-1 && number<25);
}










});
