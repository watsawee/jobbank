function checkNID() {
  let nid = (document.getElementById("nid").value).trim();
  if(nid.length !== 13 || isNaN(nid)) {
	return false;
  }else{
	return true;
  }
}

function checkGender() {
	const gender1 = document.getElementById("gender1").checked;
	const gender2 = document.getElementById("gender2").checked;
	const gender3 = document.getElementById("gender3").checked;
  
	if (gender1 || gender2 || gender3) {
	  return true;
	} else {
	  return false;
	}
  }

function checkWorkDays() {
  let num = (document.getElementById("workDays").value).trim();
  if (isNaN(num) || num < 1 || num > 6) {
    return false;
  } else {
	return true;
  }
}

function validateForm(){
	if (!checkNID()) {
	  alert("Invalid value for National ID!");
	  document.getElementById("nid").focus();
	  return false;
	} else if (!checkGender()) {
	  alert("Please select your gender.");
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
  
