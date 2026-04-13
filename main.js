function checkLogin() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("pass").value;

    let correctUser = "joseph";
    let correctPass = "sixseven";

    let status = "";

    if (username === "" || password === "") {
        status = "empty";
    } else if (username === correctUser && password === correctPass) {
        status = "success";
    } else {
        status = "failed";
    }

    switch (status) {
        case "success":
            window.alert("Welcome " + username + "!");
            break;
        case "failed":
            window.alert("Incorrect username and/or password.");
            break;
        case "empty":
            window.alert("Please fill in all fields.");
            break;
    }

}