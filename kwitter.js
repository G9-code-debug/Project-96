user_name = "";
function login() {
    if(document.getElementById("user_name").value == "") {
        alert("Error: There wasn't any name submitted");
    }
    else{
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "kwitter_room.html";
    }
}