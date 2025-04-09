function checkNID() {
	let nid = (document.getElementById("nid").value).trim();
	// ตรวจสอบว่าบัตรประชาชนต้องมี 13 หลัก และเป็นตัวเลข
	if (nid.length !== 13 || isNaN(nid) || nid === "") {
	  return false;
	} else {
	  return true;
	}
  }
  
  function checkWorkDays() {
	let num = (document.getElementById("workDays").value).trim();
	// ตรวจสอบให้กรอกเป็นตัวเลขระหว่าง 1 ถึง 6
	if (isNaN(num) || num < 1 || num > 6) {
	  return false;
	} else {
	  return true;
	}
  }
  
  function validateForm() {
	// ตรวจสอบ National ID
	if (!checkNID()) {
	  alert("Invalid National ID! Please enter exactly 13 digits.");
	  document.getElementById("nid").focus();
	  return false;  
	}
  
	// ตรวจสอบจำนวนวันทำงาน
	if (!checkWorkDays()) {
	  alert("Invalid value for days of work! Please enter 1-6 only.");
	  document.getElementById("workDays").focus();
	  return false;
	}
  
	// คำนวณอัตราค่าตอบแทน
	let total = payRateCalculate();
  
	
	alert("Your weekly pay rate is " + total + " THB.");
	return false;  
  }
  