 function adduser(){
     var username=document.getElementById("username").value;
     localStorage.setItem("uname",username);
     window.location="kwitter_room.html";
}