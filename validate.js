function checkNID() {
	let nid = document.getElementById("nid").value.trim();
	const nidRegex = /^\d{13}$/;
	if (!nidRegex.test(nid)) {
	  return false;
	}
	return true;
  }
  

  function checkWorkDays() {
	let num = document.getElementById("workDays").value.trim();
	let days = Number(num);
	if (isNaN(days) || days < 1 || days > 6) {
	  return false;
	}
	return true;
  }
  
function checkGender() {
	let genderRadios = document.getElementsByName("genderRad");
	for (let i = 0; i < genderRadios.length; i++) {
	  if (genderRadios[i].checked) {
		return true;
	  }
	}
	return false;
  }
  

  function validateForm() {
	const nid = document.getElementById("nid").value.trim();
	const fname = document.getElementById("fname").value.trim();
	const lname = document.getElementById("lname").value.trim();
	const gender = document.querySelector('input[name="genderRad"]:checked');
	const school = document.getElementById("school").value;
	const year = document.getElementById("year").value;
	const workDays = document.getElementById("workDays").value.trim();
  
	
	if (!nid || !fname || !lname || !school || !year || !workDays) {
	  alert("กรุณากรอกข้อมูลให้ครบทุกช่อง");
	  return false;
	}
  
	
	if (!checkNID()) {
	  alert("เลขบัตรประชาชนต้องเป็นตัวเลข 13 หลัก");
	  document.getElementById("nid").focus();
	  return false;
	}
  
	
	if (!checkGender()) {
	  alert("กรุณาเลือกสถานะเพศ");
	  return false;
	}
  
	
	if (!checkWorkDays()) {
	  alert("กรุณากรอกจำนวนวันที่สามารถทำงานได้ระหว่าง 1 ถึง 6 วัน (ตัวเลขเท่านั้น)");
	  document.getElementById("workDays").focus();
	  return false;
	}
  
	
	let totalPay = payRateCalculate(); 
  
	
	if (totalPay !== null) {
	  alert("Total Pay: " + totalPay + " THB");
	}
  

	return true;
  }
  