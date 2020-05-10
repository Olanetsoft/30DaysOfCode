// Create an object:
var valid = { email: false, password: false };

function validator(email, password) {

    //Check minimum valid length of an Email.
    if (email.length <= 2) {
        return valid = { email: false, password: true };
    }
    //If whether email has @ character.
    if (email.indexOf("@") == -1) {
        return valid = { email: false, password: true };
    }

    var parts = email.split("@");
    var dot = parts[1].indexOf(".");
    var len = parts[1].length;
    var dotSplits = parts[1].split(".");
    var dotCount = dotSplits.length - 1;


    //Check whether Dot is present, and that too minimum 1 character after @.
    if (dot == -1 || dot < 2 || dotCount > 2) {
        return valid = { email: false, password: true };
    }

    //Check whether Dot is not the last character and dots are not repeated.
    for (var i = 0; i < dotSplits.length; i++) {
        if (dotSplits[i].length == 0) {
            return valid = { email: false, password: true };
        }
    }

    //test if password is at least 8 characters
    if (password.length < 8) {
        return valid = { email: true, password: false }
    }
    //test if password has at least one lowercase
    if (password.search(/[a-z]/) < 0) {
        return valid = { email: true, password: false }
    }
    //test if password has at least one uppercase
    if (password.search(/[A-Z]/) < 0) {
        errors.push("Your password must contain at least one uppercase letter.")
        return valid = { email: true, password: false }
    }
    //test if password contain at least one digit
    if (password.search(/[0-9]/) < 0) {
        return valid = { email: true, password: false }
    }
    //test if password has at least one specaial character
    if (password.search(/[\!\@\#\$\%\^\&\*\(\)\_\+\.\'\,\;\:\-]/) < 0) {
        return valid = { email: true, password: false }
    }

    //return validity
    return valid = { email: true, password: true };


};

validator("akinwandeakiboluwarin@gmail.com", "YOucan'tgetmyPassword2")
