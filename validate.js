function checkNID() {
	let nid = document.getElementById("nid").value.trim();
	let pattern = /^\d{13}$/;
	return pattern.test(nid);
  }
  
  function checkGender() {
	let selected = document.querySelector('input[name="genderRad"]:checked');
	return selected !== null;
  }
  
  function checkWorkDays() {
	let num = parseInt(document.getElementById("workDays").value.trim());
	return !isNaN(num) && num >= 1 && num <= 6;
  }
  
  function validateForm() {
	if (!checkNID()) {
	  alert("Invalid value for National ID (must be 13 digits).");
	  document.getElementById("nid").focus();
	  return false;
	} else if (!checkGender()) {
	  alert("Please select your gender (Male, Female, or Other).");
	  return false;
	} else if (!checkWorkDays()) {
	  alert("Invalid value for days of work (must be 1–6).");
	  document.getElementById("workDays").focus();
	  return false;
	} else {
	  let total = payRateCalculate();
	  alert("Your weekly pay rate is " + total + " THB");
	  return false;
	}
  }
  
  