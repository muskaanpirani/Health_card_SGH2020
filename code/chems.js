var contactRef = firebase.database().ref().child('Medicalform');

var ids=[];
var firstname=[];
var lastname=[];

function readdata(){
	contactRef.on("value",function (snapshot){
		snapshot.forEach(function (childSanpshot){
			var data= childSanpshot.val();
			ids.push(data.newcontactRef);
			firstname.push(data.FirstName);
			lastname.push(data.LastName);
		});
	})
	var UniqueId=document.getElementById("UniqueId").value;

	match(UniqueId,firstname,lastname);

}

function match(UniqueId,firstname,lastname){
var i;
for(i=0;i<ids.length;++i){
	if(ids[i]==UniqueId){
		console.log("matching perfect");

		document.getElementById('showfirstname').innerHTML = `
<div> 
     <h1>UniqueId:${UniqueId}</h1>
     <h1>FirstName:${firstname[i]}</h1>
     <h1>LastName:${lastname[i]}</h1>

    
    </div>`

	
		break;
		
	}
	else {
		document.getElementById('showfirstname').textContent="User not found";
	}
	
}
console.log("In matching block");
console.log(ids);

}

//presciption


function pre(){
	contactRef.on("value",function (snapshot){
		snapshot.forEach(function (childSanpshot){
			var data= childSanpshot.val();
			ids.push(data.newcontactRef);
		});
	})
	var UniqueId=document.getElementById("UniqueId").value;
	matching(UniqueId);

}

function matching(UniqueId){
var i;
var j=0;
for(i=0;i<ids.length;++i){
	if(ids[i]==UniqueId){
		console.log("matching perfect");
		window.alert("Login successfully::");
		window.location="chemistpres.html";
		j++;
		break;
		
	}
	
}/*
if(j==0)
{
	window.alert("Login Failed");
}*/
console.log("In matching block");
console.log(ids);

}