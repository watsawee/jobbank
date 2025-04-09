function checkNID() {
	let nid = (document.getElementById("nid").value).trim();
	if(isNaN(nid) || nid.length !== 13){
	  return false;
	}else{
	  return true;
	}
  }
  
  //function checkWorkDays() {
	//let num = (document.getElementById("workDays").value).trim();
	//if (isNaN(num) || num >= 1 && num <= 6){
	  //return false;
	//} else {
	  //return true;
	//}
  //}

  function checkWorkDays() {
	let num = document.getElementById("workDays").value.trim();

	if (isNaN(num)) return false;

	let days = parseInt(num);
	return days >= 1 && days <= 6;
}
  
  function validateForm(){
	  if(!checkNID()){
		alert("Invalid value for National ID! it not be 13");
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