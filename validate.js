function checkNID() {
	let nid = (document.getElementById("nid").value).trim();
	// ตรวจสอบว่า nid เป็นตัวเลขทั้งหมดและไม่ว่าง
	if (isNaN(nid) || nid === "") {
	  return false; // ไม่ใช่ตัวเลขหรือกรอกช่องว่าง
	} else {
	  return true; // เป็นตัวเลข
	}
  }
  
  function checkWorkDays() {
	let num = (document.getElementById("workDays").value).trim();
	// ตรวจสอบว่า num เป็นตัวเลขทั้งหมดและไม่ว่าง
	if (isNaN(num) || num === "") {
	  return false; // ไม่ใช่ตัวเลขหรือกรอกช่องว่าง
	} else {
	  return true; // เป็นตัวเลข
	}
  }
  
  function validateForm() {
	if (!checkNID()) {
	  alert("Invalid value for National ID! Please enter only numeric values.");
	  document.getElementById("nid").focus();
	  return false; // หยุดการส่งฟอร์ม
	} else {
	  if (!checkWorkDays()) {
		alert("Invalid value for days of work! Please enter only numeric values.");
		document.getElementById("workDays").focus();
		return false; // หยุดการส่งฟอร์ม
	  } else {
		total = payRateCalculate();
		alert("Your weekly pay rate is " + total + " THB");
		return false; // หยุดการส่งฟอร์ม
	  }
	}
  }
  