function checkRequiredFields() {
	const fields = ["nid", "fname", "lname", "school", "year", "workDays"];
	for (let id of fields) {
	  const el = document.getElementById(id);
	  if (!el.value.trim()) {
		el.focus();
		return false;
	  }
	}
	return true;
  }

  function checkGender() {
	const genders = document.getElementsByName("genderRad");
	for (let g of genders) {
	  if (g.checked) return true;
	}
	return false;
  }

  function checkNID() {
	let nid = (document.getElementById("nid").value).trim();
	return !isNaN(nid) && nid.length === 13;
  }
  

  function checkWorkDays() {
	let value = document.getElementById("workDays").value.trim();
  
	// ตรวจสอบว่าเป็นตัวเลขล้วน และอยู่ในช่วง 1-6
	if (!/^\d+$/.test(value)) {
	  return false;
	}
  
	let num = parseInt(value);
	return num >= 1 && num <= 6;
  }  

  function resetForm() {
	document.getElementById("registerForm").reset();
  }
  

function validateForm(){
	if (!checkRequiredFields()) {
		alert("Please fill in all required fields.");
		return false;
	  }

	  if (!checkGender()) {
		alert("Please select your gender.");
		return false;
	  }
	  
	  
	if(!checkNID()){
	  alert("Invalid value for National ID!");
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