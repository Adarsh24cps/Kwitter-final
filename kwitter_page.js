//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyCPmTpAmsfOGw4bjSRIF_QSQFwYnqROD0U",
      authDomain: "kwitter-e5e7d.firebaseapp.com",
      databaseURL: "https://kwitter-e5e7d-default-rtdb.firebaseio.com",
      projectId: "kwitter-e5e7d",
      storageBucket: "kwitter-e5e7d.appspot.com",
      messagingSenderId: "956956334869",
      appId: "1:956956334869:web:6147385d75520ecd3f271c"
    };
    
   firebase.initializeApp(firebaseConfig);
   var user_name=localStorage.getItem("uname");
   var room_name=localStorage.getItem("room_name");
   function send(){
         var msg=document.getElementById("msg").value;
         firebase.database().ref(room_name).push({
               name: user_name,
               message:msg,
               like:0
         });
         document.getElementById("msg").value="";
   }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
message=message_data["message"];
name=message_data["name"];
like=message_data["like"];
name_with_tag="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button class='btn btn-warning' id='"+firebase_message_id+"' value='"+like+"' onclick='update_like(this.id)'>";
span_with_tag="<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+ "</span> </button> <hr>";
row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();
 function update_like(message_id){
       console.log(message_id);
       var likes=document.getElementById(message_id).value;
       var updated_likes=Number(likes)+1;
       firebase.database().ref(room_name).child(message_id).update({
        like:updated_likes 
       });
}
function logout(){
      localStorage.removeItem("uname");
      localStorage.removeItem("room_name");
      window.location="index.html";
}