



var contactRef =firebase.database().ref().child('Medicalform');

   
	

document.getElementById("Medicalform").addEventListener('submitbutton',submitform);



function submitform(){/*
	 e.preventDefault();*/
	var FirstName=document.getElementById("FirstName").value;
	var LastName=document.getElementById("LastName").value;
	var Address=document.getElementById("Address").value;
	var Pincode=document.getElementById("Pincode").value;
	var ContactNumber=document.getElementById("ContactNumber").value;
	var Gender=document.getElementById("Gender").value;
	var Age=document.getElementById("Age").value;
	var BloodGroup=document.getElementById("BloodGroup").value;
	var Weight=document.getElementById("Weight").value;
	var Height=document.getElementById("Height").value;
	
	var chekbox1=document.getElementById("Hearing");
	var chekbox2=document.getElementById("Physical");
	var chekbox3=document.getElementById("Visual");
	var chekbox4=document.getElementById("Mental");
	var chekbox5=document.getElementById("Intellectual");
	var chekbox6=document.getElementById("Learning");
	var chekbox7=document.getElementById("Other");
	var Disability="";
	if(chekbox1.checked)
	{
		Disability+="Hearing Disability"+" ";
	}
	if(chekbox2.checked)
	{
		Disability+="Physical Disability"+" ";
	}

	if(chekbox3.checked)
	{
		Disability+="Visual Disability"+" ";
	}

	if(chekbox4.checked)
	{
		Disability+="Mental Disability"+" ";
	}

	if(chekbox5.checked)
	{
		Disability+="Intellectual Disability"+" ";
	}

	if(chekbox6.checked)
	{
		Disability+="Learning Disability"+" ";
	}

	if(chekbox7.checked)
	{
		Disability+="Other Disability"+" ";
	}


	

//now allergy
 	var chek1=document.getElementById("Drug");
	var chek2=document.getElementById("Food");
	var chek3=document.getElementById("Insect");
	var chek4=document.getElementById("Latex");
	var chek5=document.getElementById("Mold");
	var chek6=document.getElementById("Pet");
	var chek7=document.getElementById("Pollen");		
	var chek8=document.getElementById("other");

	var allergy="";
	if(chek1.checked)
	{
		allergy+="Drug Allergy"+" ";
	}
	if(chek2.checked)
	{
		allergy+="Food Allergy"+" ";
	}

	if(chek3.checked)
	{
		allergy+="Insect Allergy"+" ";
	}

	if(chek4.checked)
	{
		allergy+="Latex Allergy"+" ";
	}

	if(chek5.checked)
	{
		allergy+="Mold Allergy"+" ";
	}

	if(chek6.checked)
	{
		allergy+="Pet Allergy"+" ";
	}

	if(chek7.checked)
	{
		allergy+="Pollen Allergy"+" ";
	}
	if(chek8.checked)
	{
		allergy+="Other Allergy"+" ";
	}


	
	saveForm(FirstName,LastName,Address,Pincode,ContactNumber,Gender,Age,BloodGroup,Weight,Height,Disability,allergy);

	document.getElementById("Medicalform").reset();

}
function saveForm(FirstName,LastName,Address,Pincode,ContactNumber,Gender,Age,BloodGroup,Weight,Height,Disability,allergy){

	var newcontactRef=contactRef.push();
	window.alert(" This is your uniqe id :- " +newcontactRef.getKey());
  	newcontactRef.set({
    FirstName: FirstName,
    LastName:LastName,
    Address: Address,
    Pincode: Pincode,
    ContactNumber: ContactNumber,
    Gender: Gender,
    Age: Age,
    BloodGroup: BloodGroup,
    Weight: Weight,
    Height: Height,
    Disability: Disability,
    allergy: allergy,
   newcontactRef: newcontactRef.getKey()/*
  	document.write(newcontactRef.getKey().value*/
  	
  });

/*document.write(newcontactRef.getKey())*/
}
/*
 function generateBarCode()

            {
            	var nric=newcontactRef.getKey();
                var url = 'https://api.qrserver.com/v1/create-qr-code/?data=' + nric + '&amp;size=50x50';
                $('#barcode').attr('src', url);
            }

*/

    	function check(input) {
        if (input.value != document.getElementById('password').value) {
            input.setCustomValidity('Password Must be Matching.');
        } 
        else {
            
            input.setCustomValidity('');
        }
   	 	}
	

function readdata(){
	contactRef.on("value",function (snapshot){
		snapshot.forEach(function (childSanpshot){
			var data= childSanpshot.val();
			console.log(data.newcontactRef);
		});
	})
}



    
