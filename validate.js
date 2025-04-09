function checkNID() {
  let nid = (document.getElementById("nid").value).trim();
  if(isNaN(nid)){
	return false;
  }else{
	return true;
  }
}

function checkWorkDays() {
  let num = (document.getElementById("workDays").value).trim();
  if (isNaN(num)) {
    return false;
  } else {
	return true;
  }
}

function validateForm() {
	var nid = document.getElementById("nid").value;
	var fname = document.getElementById("fname").value;
	var lname = document.getElementById("lname").value;
	var genderRad = document.querySelector('input[name="genderRad"]:checked');
	var school = document.getElementById("school").value;
	var year = document.getElementById("year").value;
	var workDays = document.getElementById("workDays").value;

	if (nid == "" || fname == "" || lname == "" || !genderRad || school == "" || year == "" || workDays == "") {
		alert("Please fill all infomation");
		return false;
	}

	var payRate;
	switch (year) {
	  case "1":
		payRate = 55;
		break;
	  case "2":
		payRate = 65;
		break;
	  case "3":
		payRate = 75;
		break;
	  case "4":
		payRate = 85;
		break;
	  default:
		payRate = 0;
	}

	var weeklyPay = payRate * workDays;

	alert("Your weekly pay rate is " + weeklyPay + " THB");

	return true;
  }