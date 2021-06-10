
//ADD YOUR FIREBASE LINKS HERE
 // Your web app's Firebase configuration
 var firebaseConfig = {
      apiKey: "AIzaSyCDm-vuHwTvE3t65xYCL8FwHLhYpvETbbI",
      authDomain: "swifter-9858a.firebaseapp.com",
      projectId: "swifter-9858a",
      storageBucket: "swifter-9858a.appspot.com",
      messagingSenderId: "1003108533213",
      appId: "1:1003108533213:web:c1bfeb9394276df6a16c34"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
