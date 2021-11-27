
const firebaseConfig = {
      apiKey: "AIzaSyB30PTvfq4gXUfbRJzYw7z4tedHmCTdtmI",
      authDomain: "kwitter-238fd.firebaseapp.com",
      projectId: "kwitter-238fd",
      storageBucket: "kwitter-238fd.appspot.com",
      messagingSenderId: "908478436724",
      appId: "1:908478436724:web:a6c8074b582f8ca4808821",
      measurementId: "G-69W6KL3GYX"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
