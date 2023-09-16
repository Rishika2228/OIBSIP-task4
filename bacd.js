//Rules button
function Show(id) {
    if (document.getElementById(id).style.display == 'none') {
        document.getElementById(id).style.display = 'block';
    }
    else {
        document.getElementById(id).style.display = 'none';
    }
};

//Submit Button
function Verify() {
    var userRef = "Rishika";
    var passRef = "123rishikamistri";

    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;
    if (user == userRef || pass == passRef) {
        alert("Connection")
    }
    else {
        alert("It's seem you make a mistake...")
    }
};
