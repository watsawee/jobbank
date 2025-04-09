function checkNID() {
  let nid = (document.getElementById("nid").value).trim();
  if (nid.length !== 13) {
    alert("National ID card number must contain 13 digits.");
    return false;
  }

  for (let i = 0; i < nid.length; i++) {
    if (nid[i] < '0' || nid[i] > '9') {
      alert("Only numbers must be entered.");
      return false;
    }
  }

  return true;
}


function checkWorkDays() {
  let num = (document.getElementById("workDays").value).trim();
  for (let i = 0; i < num.length; i++) {
    if (num[i] < '1' || num[i] > '6') {
      return false;
    }
  }

  return true;
}

function validateForm(){
	if(!checkNID()){
	  document.getElementById("nid").focus();
	  return false;
	}else{
		if(!checkWorkDays()){
		  alert("Only 1 - 6 Days");
		  document.getElementById("workDays").focus();
		  return false;
		}else{
			total = payRateCalculate();
			alert("Your weekly pay rate is "+total+" THB");
			return false;
		}
	}
}