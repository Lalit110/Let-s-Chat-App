var firebaseConfig = {
      apiKey: "AIzaSyCNRzJEqZp0QtCbU73ZAze8Ue_URE2R9Tg",
      authDomain: "let-s-chat-app-745f9.firebaseapp.com",
      databaseURL: "https://let-s-chat-app-745f9-default-rtdb.firebaseio.com",
      projectId: "let-s-chat-app-745f9",
      storageBucket: "let-s-chat-app-745f9.appspot.com",
      messagingSenderId: "394317369698",
      appId: "1:394317369698:web:9b38304443895e64a89c3b",
      measurementId: "G-ECL22M6TC9"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!!";

    function addroom(){

      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "Adding Room Name"
      });
      localStorage.setItem("room_name" , room_name);
      window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name : " + Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToroom(this.id)'> # " + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToroom(name){
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html";
}

function logout(){

      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}