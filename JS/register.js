
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyCzc4Wsl8L9ct-0zDSrIXCG88bx8yKaoao",
    authDomain: "webtech-6e306.firebaseapp.com",
    projectId: "webtech-6e306",
    storageBucket: "webtech-6e306.appspot.com",
    messagingSenderId: "238042997112",
    appId: "1:238042997112:web:911613f6c539824d7d688d",
    measurementId: "G-9NHEKXMGJS"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth =  firebase.auth();

  //signup function
  function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    
    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
    //
    promise.catch(e=>alert(e.message));
    alert("SignUp Successfully");
  }

  //signIN function
  function  signIn(){
    var email = document.getElementById("email");
    var password  = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));
    
  }


  //signOut

  function signOut(){
    auth.signOut();
    alert("SignOut Successfully from System");
  }

 