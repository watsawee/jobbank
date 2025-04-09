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

function validateForm(){
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
function validateForm() {
	const nidInput = document.getElementById("nid");
	const nidValue = nidInput.value.trim();
	const nidError = document.getElementById("nidError");
	nidError.textContent = ""; // เคลียร์ข้อความผิดพลาดก่อนตรวจสอบ
  
	if (nidValue.length !== 13) {
	  nidError.textContent = "กรุณากรอกหมายเลขบัตรประชาชน 13 หลัก";
	  nidInput.focus();
	  return false;
	}
  
	if (!/^\d+$/.test(nidValue)) {
	  nidError.textContent = "กรุณากรอกหมายเลขบัตรประชาชนด้วยตัวเลขเท่านั้น";
	  nidInput.focus();
	  return false;
	}
  
	return true;
  }

