function isNumeric(value) {
    return /^\d+$/.test(value);
}

function checkNID() {
  let nid = (document.getElementById("nid").value).trim();
  if(nid.length == 13 && isNumeric(nid)){
	return true;
  }else{
	return false;
  }
}

function checkWorkDays() {
  let num = (document.getElementById("workDays").value).trim();
  if (isNumeric(num) && num >=1 && num <= 6 ) {
    return true;
  } else {
	return false;
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