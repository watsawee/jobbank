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

function checkGender() {
  let radios = document.getElementsByName("genderRad");
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) return true;
  }
  return false;
}

function validateForm() {
  let fname = (document.getElementById("fname").value).trim();
  let lname = (document.getElementById("lname").value).trim();

  if (!checkNID()) {
    alert("National ID must be exactly 13 digits and numbers only!");
    document.getElementById("nid").focus();
    return false;
  }
  if (fname === "") {
    alert("Please enter your First Name!");
    document.getElementById("fname").focus();
    return false;
  }
  if (lname === "") {
    alert("Please enter your Last Name!");
    document.getElementById("lname").focus();
    return false;
  }
  if (!checkGender()) {
    alert("Please select your Gender!");
    return false;
  }
  if (!checkWorkDays()) {
    alert("Days of work must be between 1 and 6!");
    document.getElementById("workDays").focus();
    return false;
  }

  let total = payRateCalculate();
  alert("Your weekly pay rate is " + total + " THB");
  return false;
}