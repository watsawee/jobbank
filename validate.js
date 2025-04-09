function checkNID() {
  let nid = (document.getElementById("nid").value).trim();

const regex = /^\d{13}$/; 

  if(!regex.test(nid)){
	return false;
  }else{
	return true;
  }
}

function checkWorkDays() {
  let workDays = (document.getElementById("workDays").value).trim();
  
  if (isNaN(workDays) || workDays < 1 || workDays > 6 ) {
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