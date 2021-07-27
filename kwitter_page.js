username = localStorage.getItem("user_name");
roomname = localStorage.getItem("roomname");
message = "";
//YOUR FIREBASE LINKS
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
//Intialize Firebase
      firebase.initializeApp(firebaseConfig);
function send() {
      message = document.getElementById("message_input").value;
      console.log(message);
      if(message == "") {
            alert("Error: There wasn't any input");
      }
      else{
            firebase.database().ref(roomname).push({
                 msg: message,
                 name: username,
                 likes: 0
            });
            document.getElementById("message_input").value = "";
      }
}
function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
         console.log(firebase_message_id);
         console.log(message_data);
         names = message_data['name'];
         messages = message_data['msg'];
         likes = message_data['likes'];
         name_with_tag = "<h4>"+ names + " <img class='user_tick' src='tick.png'></h4>"
         msg_with_tag = "<h4 class='message_h4>" + messages + "</h4>"
         likes_btn = "<button class = 'btn btn-success' id=" + firebase_message_id + "value=" + likes + "onclick='update_likes(this.id)'>";
         span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Likes: " + likes + "</span></button></h4>";
         row = name_with_tag + msg_with_tag + likes_btn + span_with_tag;
         document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("roomname");
      window.location = "index.html";
}
