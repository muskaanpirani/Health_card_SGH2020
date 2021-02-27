function getdata() {
	// body...
	var uid=document.getElementById("uid").value;


	firebase.database().ref('uid/'+uid).once('value').then(function(snapshot){

/*
		var FirstName=snapshort.val().FirstName;
		var LastName=snapshort.val().LastName;*/
		var Address=snapshot.val().Address;
		var Age=snapshot.val().Age;
		
		/*var BloodGroup=snapshort.val().BloodGroup;
		var ContactNumber=snapshort.val().ContactNumber;
		var newcontactRef=snapshort.val().newcontactRef;
*/


		/*document.getElementById("FirstName").innerHTML=FirstName;
		document.getElementById("LastName").innerHTML=LastName;	
		*/
		document.getElementById("Address").innerHTML=Address;
		document.getElementById("Age").innerHTML=Age;
		/*document.getElementById("BloodGroup").innerHTML=BloodGroup;
		document.getElementById("ContactNumber").innerHTML=ContactNumber;
		document.getElementById("newcontactRef").innerHTML=newcontactRef;
*/
		
		



	})
}