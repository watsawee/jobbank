function checkNID() {
	let nid = (document.getElementById("nid").value).trim();
	return /^\d{13}$/.test(nid); // ต้องเป็นตัวเลข 13 หลัก
  }
  
  function checkFirstName() {
	let fname = (document.getElementById("fname").value).trim();
	return fname !== "";
  }
  
  function checkLastName() {
	let lname = (document.getElementById("lname").value).trim();
	return lname !== "";
  }
  
  function checkGender() {
	return (
	  document.getElementById("gender1").checked ||
	  document.getElementById("gender2").checked ||
	  document.getElementById("gender3").checked
	);
  }
  
  function checkSchool() {
	let school = document.getElementById("school").value;
	return school !== "";
  }
  
  function checkYear() {
	let year = document.getElementById("year").value;
	return year !== "";
  }
  
  function checkWorkDays() {
	let num = parseInt((document.getElementById("workDays").value).trim());
	return !isNaN(num) && num >= 1 && num <= 6;
  }
  
  function validateForm() {
	if (!checkNID()) {
	  alert("Invalid National ID. Please enter 13 digits.");
	  document.getElementById("nid").focus();
	  return false;
	}
  
	if (!checkFirstName()) {
	  alert("Please enter your First Name.");
	  document.getElementById("fname").focus();
	  return false;
	}
  
	if (!checkLastName()) {
	  alert("Please enter your Last Name.");
	  document.getElementById("lname").focus();
	  return false;
	}
  
	if (!checkGender()) {
	  alert("Please select your Gender.");
	  return false;
	}
  
	if (!checkSchool()) {
	  alert("Please select your School.");
	  document.getElementById("school").focus();
	  return false;
	}
  
	if (!checkYear()) {
	  alert("Please select your Year of Study.");
	  document.getElementById("year").focus();
	  return false;
	}
  
	if (!checkWorkDays()) {
	  alert("Invalid value for work days (1 - 6 only).");
	  document.getElementById("workDays").focus();
	  return false;
	}
  
	const total = payRateCalculate();
	alert("Your weekly pay rate is " + total + " THB");
	return false; // เปลี่ยนเป็น true ถ้าต้องการให้ submit จริง
  }