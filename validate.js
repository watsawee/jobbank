function checkNID() {
  let nid = (document.getElementById("nid").value).trim();
  if (isNaN(nid) || nid.length !== 13) {
	return false;
  }else{
	return true;
  }
}

function checkWorkDays() {
  let num = (document.getElementById("workDays").value).trim();
  let numWorkDays = parseInt(num);
  if (isNaN(numWorkDays) || numWorkDays < 1 || numWorkDays > 6 ) {
    return false;
  } else {
	return true;
  }
}

function validateForm(){
	if(!checkNID()){
	  alert("Invalid value for National ID! It must be 13");
	  document.getElementById("nid").focus();
	  return false;
	}else{
		if(!checkWorkDays()){
		  alert("Invalid value for days of work! It must fill in 1-6 days");
		  document.getElementById("workDays").focus();
		  return false;
		}else{
			total = payRateCalculate();
			alert("Your weekly pay rate is "+total+" THB");
			return false;
		}
	}
}