function checkNID() {
	let nid = (document.getElementById("nid").value).trim();
	if (isNaN(nid) || nid === "") {
	  return false; 
	} else {
	  return true; 
	}
  }
  
  function checkWorkDays() {
	let num = (document.getElementById("workDays").value).trim();
	if (isNaN(num) || num === "") {
	  return false; 
	} else {
	  return true; 
	}
  }
  
  function validateForm() {
	if (!checkNID()) {
	  alert("Invalid value for National ID! Please enter only numeric values.");
	  document.getElementById("nid").focus();
	  return false; 
	} else {
	  if (!checkWorkDays()) {
		alert("Invalid value for days of work! Please enter only numeric values.");
		document.getElementById("workDays").focus();
		return false; 
	  } else {
		total = payRateCalculate();
		alert("Your weekly pay rate is " + total + " THB");
		return false; 
	  }
	}
  }
  