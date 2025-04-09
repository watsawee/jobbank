function checkNID() {
  let nid = (document.getElementById("nid").value).trim();
  if(isNaN(nid)){
	return false;
  }else{
	return true;
  }
}

function checkfname(){
	let firstName = (document.getElementById("fname").value).trim();
	if(isNaN(firstName)){
		return false;
	}else{
		return true;
  }
}

function checkLname(){
	let lastName = (document.getElementById("lname").value).trim();
	if(isNaN(lastName)){
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
	console.log(userInput);
	
	if(!checkNID()){
	  alert("Invalid value for National ID!");
	  document.getElementById("nid").focus();
	  return false;
	}
	if(userInput < 13 || userInput > 13 ){
		alert("Need 13 digit for National ID!");
		return false;
		
	}
	
	//#####################################################
	
	if(!checkfname()){
		alert("Invalid value for First Name");
		document.getElementById("fname").focus();
		return false;
	}
	if(!checkLname()){
		alert("Invalid value for Last Name");
		document.getElementById("lname").focus();
		return false;
	}
	
	//######################################################
	
	else{
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