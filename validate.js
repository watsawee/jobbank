function checkNID() {
  let nid = (document.getElementById("nid").value).trim();
  if (nid === "") return false;
  if (isNaN(nid)) return false;
  if (nid.length !== 13) return false;
  return true;
}

function checkWorkDays() {
  let num = (document.getElementById("workDays").value).trim();
  if (num === "") return false;
  if (isNaN(num)) return false;
  let days = parseInt(num);
  if (days < 1 || days > 6) return false;
  return true;
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