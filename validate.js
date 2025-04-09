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

function validateForm() {
	const nid = document.getElementById("nid").value.trim();
	const fname = document.getElementById("fname").value.trim();
	const lname = document.getElementById("lname").value.trim();
	const gender = document.querySelector('input[name="genderRad"]:checked');
	const school = document.getElementById("school").value;
	const year = document.getElementById("year").value;
	const workDays = document.getElementById("workDays").value.trim();
  
	
	if (!nid || !fname || !lname || !gender || !school || !year || !workDays) {
	  alert("กรุณากรอกข้อมูลให้ครบทุกช่อง");
	  return false;
	}
  
	
	
  }
  