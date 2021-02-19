var firebaseConfig = {
      apiKey: "AIzaSyDApoNLpbJRKtRl68Yfg9yFiqbmleYT2x4",
      authDomain: "kwitter-47862.firebaseapp.com",
      databaseURL: "https://kwitter-47862-default-rtdb.firebaseio.com",
      projectId: "kwitter-47862",
      storageBucket: "kwitter-47862.appspot.com",
      messagingSenderId: "650213967935",
      appId: "1:650213967935:web:c60497340143f26c44908a"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

var username= localStorage.getItem("user_name") 
document.getElementById("welcome").innerHTML="Welcome "+username+" !"


function addroom() {
   roomname= document.getElementById("roominput").value  
   firebase.database().ref("/").child(roomname).update({
         status:"roomname added"
   }) 
   localStorage.setItem("roomname", roomname)
   window.location="kwitter_page.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log(Room_names)
 row= `<div class="room_name" id=${Room_names} onclick="go_to_room(this.id)">${Room_names}</div><hr>`
document.getElementById("output").innerHTML+=row
      //End code
      });});}
getData();
function go_to_room(room) {
     console.log(room) 
     localStorage.setItem("roomname",room )
     window.location="kwitter_page.html"
}

function logout() {
    localStorage.removeItem("user_name")
    localStorage.removeItem("roomname")
    window.location="index.html"  
}