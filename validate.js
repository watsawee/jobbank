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
  if (isNaN(num) | num < 1 | num > 6) {
    return false;
  } else {
	return true;
  }
}

function validateForm(){
	if(!checkNID()){
	  alert("Invalid value for National ID!");
	  document.getElementById("nid").focus();
	  const nidRegex = /^\d{13}$/;
	  if (!nidRegex.test(nid)){
		alert("กรุณากรอกหมายเลขบัตรประชาชนให้ถูกต้อง (13 หลัก และเป็นตัวเลขเท่านั้น)");
		return false; 
	  }
	  return true;
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