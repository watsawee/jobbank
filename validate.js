function checkNID() {
  let nid = document.getElementById("nid").value.trim();
  if (!/^\d{13}$/.test(nid)) {
    return false;
  } else {
    return true;
  }
}

function checkWorkDays() {
  let num = document.getElementById("workDays").value.trim();
  if (num === "" || isNaN(num)) {
    return false;
  }
  let days = parseInt(num);
  if (days >= 1 && days <= 6) {
    return true;
  } else {
    return false;
  }
}

function validateForm(){
  let nid = document.getElementById("nid").value.trim();
  if(nid === "") {
    alert("Please enter National ID");
    document.getElementById("nid").focus();
    return false;
  }
  if(!checkNID()){
    alert("National ID must be exactly 13 digits and numeric!");
    document.getElementById("nid").focus();
    return false;
  }
  
  let fname = document.getElementById("fname").value.trim();
  if(fname === "") {
    alert("Please enter First Name");
    document.getElementById("fname").focus();
    return false;
  }
  
  let lname = document.getElementById("lname").value.trim();
  if(lname === "") {
    alert("Please enter Last Name");
    document.getElementById("lname").focus();
    return false;
  }

  let genderRadios = document.getElementsByName("genderRad");
  let genderSelected = false;
  for(let i = 0; i < genderRadios.length; i++) {
    if(genderRadios[i].checked) {
      genderSelected = true;
      break;
    }
  }
  if(!genderSelected) {
    alert("Please select Gender");
    return false;
  }

  let workDaysStr = document.getElementById("workDays").value.trim();
  if(workDaysStr === "") {
    alert("Please enter How many days a week can you work");
    document.getElementById("workDays").focus();
    return false;
  }

  if(!checkWorkDays()){
    alert("Invalid value for days of work! Must be a number between 1 and 6.");
    document.getElementById("workDays").focus();
    return false;
  }

  let total = payRateCalculate();
  alert("Your weekly pay rate is " + total + " THB");
  return false;
}