function checkNID() {
  let nid = (document.getElementById("nid").value).trim();
  return nid !== "" && !isNaN(nid) && nid.length === 13;
}

function checkWorkDays() {
  let num = (document.getElementById("workDays").value).trim();
  let day = parseInt(num);
  // ตรวจสอบว่าเป็นตัวเลข และอยู่ในช่วง 1-6
  if (isNaN(day) || day < 1 || day > 6) {
    return false;
  }
  return true;
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
		if (!checkWorkDays()) {
			alert("Invalid value for days of work! Please enter a number between 1 and 6.");
			document.getElementById("workDays").focus();
			return false;
		}else{
			total = payRateCalculate();
			//alert("Your weekly pay rate is "+total+" THB");
			return false;
		}
	}
}