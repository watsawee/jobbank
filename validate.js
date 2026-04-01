function checkNID() {
  let nid = (document.getElementById("nid").value).trim();
  if(nid === "") return false;
  if(!/^\d{13}$/.test(nid)){
	return false;
  }else{
	return true;
  }
}

function checkFname(){
	let fname = (document.getElementById("fname").value).trim();
	return fname !== "";
}

function checkLname(){
	let lname = (document.getElementById("lname").value).trim();
	return lname !== "";
}

function checkGender(){
	return document.querySelector('input[name="genderRad"]:checked') !== null;
}

function checkWorkDays() {
  let num = (document.getElementById("workDays").value).trim();
  if (num === "") return false;
  if (!/^\d+$/.test(num)) return false;
  
  let days = parseInt(num);
  return days >= 1 && days <= 6;
}

function validateForm(){
	if(!checkNID()){
	  alert("Invalid value for National ID!");
	  document.getElementById("nid").focus();
	  return false;
	}
	if(!checkFname()){
	alert("Please enter First Name!");
	  document.getElementById("fname").focus();
	  return false;
	}
	if(!checkLname()){
	alert("Please enter Last Name!");
	  document.getElementById("lname").focus();
	  return false;
	}
	if(!checkGender()){
	alert("Please select Gender!");
	  return false;
	}	
	if(!checkWorkDays()){
		alert("Invalid value for days of work!");
		document.getElementById("workDays").focus();
		return false;
	}
	total = payRateCalculate();
	alert("Your weekly pay rate is "+total+" THB");
	return false;
}