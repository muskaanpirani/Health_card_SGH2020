  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDLUySl1c6LSYq0rVCPAsXKuLOt7L5ztYs",
    authDomain: "sign-in-48f1a.firebaseapp.com",
    databaseURL: "https://sign-in-48f1a.firebaseio.com",
    projectId: "sign-in-48f1a",
    storageBucket: "sign-in-48f1a.appspot.com",
    messagingSenderId: "458378114245",
    appId: "1:458378114245:web:f8ee3df49b68dbd6a7acac",
    measurementId: "G-GK60DBRVHM"
  };
  // Initialize Firebase

 /*function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
   }*/


  firebase.initializeApp(firebaseConfig);

  
	const auth = firebase.auth();
	
	
	function signUp(){
		
		var email = document.getElementById("email");
		var password = document.getElementById("password");
		
		const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
		promise.catch(e => alert(e.message));
		
		/*alert("Signed Up");
		*/
		window.location="hackathon.html";
	}
	
	
	
	function signIn(){
		
		var email = document.getElementById("email");
		var password = document.getElementById("password");
		
		const promise = auth.signInWithEmailAndPassword(email.value, password.value);
		promise.catch(e => alert(e.message));
		
		
		
		
	}
	
	
	function signOut(){
		
		auth.signOut();
		alert("Signed Out");
		window.location="main.html";
	}
	
	
	
 	auth.onAuthStateChanged(async function(user){
		
		if(user){
			
			var email = user.email;

			window.location="card.html";	
			break;

	/*		window.location="fbasecard.html";*/			
			//Take user to a different or home page

			//is signed in
			
		}/*else{
			
			alert("No Active User");
			//no user is signed in
		}
		*/
		
		
	});
	
