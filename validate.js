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
	
	let userInput = document.getElementById('nid').value.length;
	let inputWork = document.getElementById('workDays').value;
	
	if(!checkNID()){
	  alert("Invalid value for National ID!");
	  document.getElementById("nid").focus();
	  return false;
	}
	if(userInput < 13 || userInput > 13 ){
		alert("Need 13 digit for National ID!");
		return false;
	}
	
	//######################################################
	if(inputWork > 6 ){
		alert("Work day should not be more than 6 Hour");
		return false;
	}
	
	else{
		if(!checkWorkDays()){
		  alert("Invalid value for days of work!");
		  document.getElementById("workDays").focus();
		  return false;
		}
		else{
			total = payRateCalculate();
			alert("Your weekly pay rate is "+total+" THB");
			return false;
		}
	}
	
	
}