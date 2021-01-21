function sendDataByGetMethod() {
	if (document.getElementById('userAgeGet').value < 0
			|| document.getElementById('userAgeGet').value > 100) {
		alert('Sorry, wrong input of your age');
		document.getElementById('userAgeGet').focus();
	} else if(isNaN(document.getElementById('userAgeGet').value)){
		alert('Sorry, age must be entered in numeric style');
		document.getElementById('userAgeGet').focus();
	} else {
		var userData = {
			lName : document.getElementById('userLastNameGet').value,
			fName : document.getElementById('userNameGet').value,
			age : document.getElementById('userAgeGet').value,
			address : document.getElementById('userAddressGet').value
		};
		console.log(userData);
		console.log("GET");
		var xhr = new XMLHttpRequest();
		xhr.open("GET", "/formGet?lName=" + userData.lName +"&fName= "+ userData.fName +  "&age="
				+ userData.age + "&address="
				+ userData.address);
		xhr.setRequestHeader("Content-type", "application/json");
		xhr.send();

	}

}

function sendDataByPostMethod() {
	if (document.getElementById('userAgePost').value < 0
			|| document.getElementById('userAgePost').value > 100) {
		alert('Sorry, wrong input of your age');
		document.getElementById('userAgePost').focus();
	} else if(isNaN(document.getElementById('userAgeGet').value)){
		alert('Sorry, age must be entered in numeric style');
		document.getElementById('userAgeGet').focus();
	}else {
		var userData = {
			lName : document.getElementById('userLastNamePost').value,
			fName : document.getElementById('userNamePost').value,
			age : document.getElementById('userAgePost').value,
			address : document.getElementById('userAddressPost').value
		};
		console.log(userData);
		console.log("POST")
		var xhr = new XMLHttpRequest();
		xhr.open("POST", "/formPost");
		xhr.setRequestHeader("Content-type", "application/json");
		xhr.send(JSON.stringify(userData));

	}

}