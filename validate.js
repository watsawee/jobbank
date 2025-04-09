function checkNID() {
	let nid = (document.getElementById("nid").value).trim();
	if(nid.length !== 13 || isNaN(nid)) {
	  return false; 
	}
	return true;
  }
  

  function checkWorkDays() {
	let num = (document.getElementById("workDays").value).trim();
	if (isNaN(num) || num < 1 || num > 6) {
	  return false; 
	}
	return true;
  }
  

  function validateForm() {
	
	if (!checkNID()) {
	  alert("Invalid National ID!");
	  document.getElementById("nid").focus();
	  return false;
	}
	
	
	if (document.getElementById("fname").value.trim() === "") {
	  alert("Please enter your first name");
	  document.getElementById("fname").focus();
	  return false;
	}
	if (document.getElementById("lname").value.trim() === "") {
	  alert("Please enter your last name");
	  document.getElementById("lname").focus();
	  return false;
	}
  
	
	let genderRad = document.getElementsByName("genderRad");
	let genderSelected = false;
	for (let i = 0; i < genderRad.length; i++) {
	  if (genderRad[i].checked) {
		genderSelected = true;
		break;
	  }
	}
	if (!genderSelected) {
	  alert("Please select your gender");
	  return false;
	}
  
	if (!checkWorkDays()) {
	  alert("Invalid number of work days!");
	  document.getElementById("workDays").focus();
	  return false;
	}
  
	let total = payRateCalculate();
	alert("Your weekly pay rate is " + total + " THB");
  
	return false; 
  }
  