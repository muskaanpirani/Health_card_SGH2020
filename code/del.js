


function submitClick() {
	var mainText=document.getElementById("mainText").value;
var submitBtn=document.getElementById("submitBtn");

document.getElementById("p1").innerHTML=mainText;

	
	var firebaseRef=firebase.database().ref();
	firebaseRef.child("Text").set("Some value");
}