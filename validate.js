function checkNID() {
	let nid = (document.getElementById("nid").value).trim();
	
	let regex = /^[0-9]{13}$/; 
	
	if (nid === "" || !regex.test(nid)) {
	  return false;
	} else {
	  return true;
	}
  }
  
  
  function checkWorkDays() {
	let num = (document.getElementById("workDays").value).trim();
	
	if (num === "" || isNaN(num) || num < 1 || num > 6) {
	  return false;
	} else {
	  return true;
	}
  }
  
  
  function checkNameFields() {
	let fname = (document.getElementById("fname").value).trim();
	let lname = (document.getElementById("lname").value).trim();
	if (fname === "" || lname === "") {
	  return false;
	} else {
	  return true;
	}
  }
  
  function checkGender() {
	let genderRad = document.getElementsByName("genderRad");
	let genderSelected = false;
	for (let i = 0; i < genderRad.length; i++) {
	  if (genderRad[i].checked) {
		genderSelected = true;
		break;
	  }
	}
	return genderSelected;
  }
  
  function checkSchool() {
	let school = document.getElementById("school").value;
	return school !== "";
  }
  
  function checkYear() {
	let year = document.getElementById("year").value;
	return year !== "";
  }
  
  function validateForm() {
	if (!checkNID()) {
	  alert("Invalid value for National ID!");
	  document.getElementById("nid").focus();
	  return false;
	} else if (!checkNameFields()) {
	  alert("Please fill in both first and last names!");
	  document.getElementById("fname").focus();
	  return false;
	} else if (!checkGender()) {
	  alert("Please select a gender!");
	  return false;
	} else if (!checkSchool()) {
	  alert("Please select a school!");
	  return false;
	} else if (!checkYear()) {
	  alert("Please select the year of study!");
	  return false;
	} else if (!checkWorkDays()) {
	  alert("Invalid value for days of work!");
	  document.getElementById("workDays").focus();
	  return false;
	} else {
	  total = payRateCalculate();
	  alert("Your weekly pay rate is " + total + " THB");
	  return false;
	}
  }
  