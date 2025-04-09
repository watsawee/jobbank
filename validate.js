function checkNID() {
    let nid = (document.getElementById("nid").value).trim();

    const nidPattern = /^\d{13}$/;
    if (!nidPattern.test(nid)) {
      return false;
    } else {
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
