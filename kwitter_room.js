
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCPmTpAmsfOGw4bjSRIF_QSQFwYnqROD0U",
      authDomain: "kwitter-e5e7d.firebaseapp.com",
      databaseURL: "https://kwitter-e5e7d-default-rtdb.firebaseio.com",
      projectId: "kwitter-e5e7d",
      storageBucket: "kwitter-e5e7d.appspot.com",
      messagingSenderId: "956956334869",
      appId: "1:956956334869:web:6147385d75520ecd3f271c"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   var username=localStorage.getItem("uname");
   document.getElementById("username").innerHTML="Welcome "+username+" !";
   function addroom(){
         var roomname=document.getElementById("room_name").value;
         firebase.database().ref("/").child(roomname).update({
               purpose:"addind_room_name"
         });
         localStorage.setItem("room_name",roomname);
         window.location="kwitter_page.html";
   }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(Room_names);
      var row="<div class='room_name' id='"+Room_names+"' onclick='redirectToRoomName(this.id)'>"+Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("uname");
      localStorage.removeItem("room_name");
      window.location="index.html";
}