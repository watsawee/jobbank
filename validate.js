function validateForm() {
	let nid = document.getElementById("nid").value.trim();
	if (!nid) {
	  alert("Please fill in the information correctly.");
	  return false;
	}
}

function checkNID() {
  let nid = (document.getElementById("nid").value).trim();
  if(isNaN(nid)){
	return false;
  }else{
	return true;
  }
}

function checkWorkDays() {
	const num = document.getElementById("workDays").value.trim();
	const val = parseInt(num);
	return !isNaN(val) && val >= 1 && val <= 6; 
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