function checkNID() {
  let nid = (document.getElementById("nid").value).trim();
  if (nid === "" || isNaN(nid) || nid.length !== 13) {
	return false;
  }else{
	return true;
  }
}

function checkWorkDays() {
  let num = (document.getElementById("workDays").value).trim();
  if (num === "" || isNaN(num) || Number(num) < 1 || Number(num) > 6) {
    return false;
  } else {
	return true;
  }
}

function validateForm(){
	let nid = document.getElementById("nid").value.trim();
    let fname = document.getElementById("fname").value.trim();
    let lname = document.getElementById("lname").value.trim();
    let workDays = document.getElementById("workDays").value.trim()
	if (nid === "" || fname === "" || lname === "" || workDays === "") {
		alert("Please fill in all fields.");
		return false;
	}
	if(!checkNID()){
	  alert("Invalid value for National ID!");
	  document.getElementById("nid").focus();
	  return false;
	}
	
	let gender1 = document.getElementById("gender1").checked;
    let gender2 = document.getElementById("gender2").checked;
    let gender3 = document.getElementById("gender3").checked;
    if (!gender1 && !gender2 && !gender3) {
      alert("Please select your gender.");
      return false;
    }

    if (!checkWorkDays()) {
      alert("Invalid value for days of work! (Max 6 days/week)");
      document.getElementById("workDays").focus();
      return false;
    }

    let total = payRateCalculate();
    alert("Your weekly pay rate is " + total + " THB");
  
    return false;
}