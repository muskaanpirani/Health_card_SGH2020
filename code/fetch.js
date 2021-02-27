var contactRef =firebase.database().ref().child('Medicalform');

var ids=[];
var firstname=[];
var lastname=[];
var address=[];
var age=[];
var bloodgroup=[];
var contactnumber=[];
var disablity=[];
var allergy=[];
var gender=[];
var height=[];
var weight=[];
var pincode=[];

function readdata(){
	contactRef.on("value",function (snapshot){
		snapshot.forEach(function (childSanpshot){
			var data= childSanpshot.val();
			ids.push(data.newcontactRef);
			firstname.push(data.FirstName);
			lastname.push(data.LastName);
			address.push(data.Address);
			age.push(data.Age);
			bloodgroup.push(data.BloodGroup);
			contactnumber.push(ContactNumber);
			disablity.push(data.Disablity);
			allergy.push(data.Allergy);
			gender.push(data.Gender);
			weight.push(data.Weight);
			height.push(data.Height);
			pincode.push(data.Pincode);




		});
	})
	console.log(ids);
	console.log(firstname);
	console.log(lastname);
	console.log(address);
	console.log(age);
	console.log(bloodgroup);
	console.log(contactnumber);
	console.log(height);
	console.log(weight);
	console.log(pincode);
	console.log(disablity);
	console.log(allergy);
	console.log(gender);
}

