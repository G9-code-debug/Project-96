var firebaseConfig = {
      apiKey: "AIzaSyCv7gdPmtPgDcLNKfYjDQCHRnb_kbY7CLE",
      authDomain: "kwitter-8363b.firebaseapp.com",
      databaseURL: "https://kwitter-8363b-default-rtdb.firebaseio.com",
      projectId: "kwitter-8363b",
      storageBucket: "kwitter-8363b.appspot.com",
      messagingSenderId: "1083873482336",
      appId: "1:1083873482336:web:ab492a92d7ec6d199e9505",
      measurementId: "G-VPVTGPG16E"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
var user_name = localStorage.getItem("user_name");
console.log(user_name);
document.getElementById("user_name").innerHTML = "Welcome " + user_name;
function logout() {
      window.location = "index.html";
      localStorage.removeItem("user_name");
      localStorage.removeItem("roomname");
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(Room_names);
      row = "<div class='room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>"
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function add_room() {
      roomname = document.getElementById("room_name").value;
      firebase.database().ref("/").child(roomname).update({
            purpose: "Adding RoomName"
      });
      localStorage.setItem("roomname", roomname);
      window.location = "kwitter_page.html";
}
function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("roomname", name);
      window.location = "kwitter_page.html";
      
}