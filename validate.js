function checkNID() {
  let nid = (document.getElementById("nid").value).trim();
  return nid !== "" && !isNaN(nid) && nid.length === 13;
}

function checkWorkDays() {
  let num = (document.getElementById("workDays").value).trim();
  if (isNaN(num)) {
    return false;
  } else {
	return true;
  }
}

function validateGender() {
	const genderSelected = document.querySelector('input[name="genderRad"]:checked');
	return genderSelected !== null;
 }

function validateForm(){
	if (!validateGender()) {
		alert("Please select your gender: Male, Female, or Other.");
		return false;
	}
	if(!checkNID()){
	  alert("Invalid value for National ID! must be 13 and only number.");
	  document.getElementById("nid").focus();
	  return false;
	}else{
		if(!checkWorkDays()){
		  alert("Invalid value for days of work!");
		  document.getElementById("workDays").focus();
		  return false;
		}else{
			total = payRateCalculate();
			alert("Your weekly pay rate is "+total+" THB");
			return false;
		}
	}
}