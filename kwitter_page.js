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
  room_name = localStorage.getItem("room_name");

  function send(){

    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
    document.getElementById("msg").value="";
  }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();