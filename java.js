/**
 * Created by admin on 11/13/16.
 */

$( document ).on( "pageinit", function() {




    $("#login").click(function () {
            var email = $("#email").val();
            var password = $("#password").val();
// Checking for blank fields.
            if (email == '' || password == '') {
                $('input[type="text"],input[type="password"]').css("border", "2px solid red");
                $('input[type="text"],input[type="password"]').css("box-shadow", "0 0 3px red");
                alert("Please fill all fields...!!!!!!");
            } else {
                $.post("login.php", {email1: email, password1: password},
                    function (data) {
                        if (data == 'Invalid Email.......') {
                            $('input[type="text"]').css({"border": "2px solid red", "box-shadow": "0 0 3px red"});
                            $('input[type="password"]').css({
                                "border": "2px solid #00F5FF",
                                "box-shadow": "0 0 5px #00F5FF"
                            });
                            alert(data);
                        } else if (data == 'Email or Password is wrong...!!!!') {
                            $('input[type="text"],input[type="password"]').css({
                                "border": "2px solid red",
                                "box-shadow": "0 0 3px red"
                            });
                            alert(data);
                        } else if (data == 'Successfully Logged in...') {
                            $("form")[0].reset();
                            $('input[type="text"],input[type="password"]').css({
                                "border": "2px solid #00F5FF",
                                "box-shadow": "0 0 5px #00F5FF"
                            });
                            alert(data);
                        } else {
                            alert(data);
                        }
                    });
            }
        });


    $("#done").click(function () {
        var first = $("#fname").val();
        var last = $("#lname").val();
        var id = $("#id").val();
        var code = $("#code").val();
        var demail = $("#demail").val();
        var pass = $("#pass").val();
        var cpass = $("#cpassword").val();
        if (first == '' || last == '' || id == '' || code == '' || demail == '' || pass == '' || cpass == '') {
            alert("Please fill in the form");
        }

        else {
            $.mobile.changePage("test.html", {
                transition: "pop",
                reverse: false,
                changeHash: true


            });
        }
    });

    $("#signup").click(function () {
        $.mobile.changePage("Signup.html", {
            transition: "pop",
            reverse: false,
            changeHash: true,

        });

    });












});
