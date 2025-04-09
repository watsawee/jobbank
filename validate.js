function checkNID() {
	if (document.getElementById("nid").value.trim().length === 13 && !isNaN(document.getElementById("nid").value.trim())) {
	  return true;
	} else {
	  return false;
	}
  }
  

function checkWorkDays() {
  let num = (document.getElementById("workDays").value).trim();
  if (isNaN(num) || num < 1 || num > 6 ) {
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