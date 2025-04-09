function checkNID() {
  let nid = (document.getElementById("nid").value).trim();
  return /^\d{13}$/.test(nid);  
}

function checkWorkDays() {
  let num = (document.getElementById("workDays").value).trim();
  let days = parseInt(num);
  return !isNaN(days) && days >= 1 && days <= 6;
}
function checkGender() {
	return (
	  document.getElementById("gender1").checked ||
	  document.getElementById("gender2").checked ||
	  document.getElementById("gender3").checked
	);
  }
function validateForm(){
	if(!checkNID()){
	  alert("Invalid value for National ID!");
	  document.getElementById("nid").focus();
	  return false;
	}
	if (document.getElementById("fname").value.trim() === "") {
		alert("Please enter your real name");
		document.getElementById("fname").focus();
		return false;
	  }
	  if (document.getElementById("lname").value.trim() === "") {
		alert("Please enter last name");
		document.getElementById("lname").focus();
		return false;
	  }
	  if (!checkGender()) {
		alert("Please select gender");
		return false;
	  }
	  if (document.getElementById("school").value === "") {
		alert("Please select a faculty");
		document.getElementById("school").focus();
		return false;
	  }
		if(!checkWorkDays()){
		  alert("Please specify the number of days you can work between 1 and 6 days!");
		  document.getElementById("workDays").focus();
		  return false;
		}else{
			total = payRateCalculate();
			alert("Your weekly pay rate is "+total+" THB");
			return false;
		}
	}
