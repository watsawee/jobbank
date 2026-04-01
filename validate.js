function checkNID() {
  let nid = (document.getElementById("nid").value).trim();
  if (nid.length === 13 && !isNaN(nid)) {
    return true;
  } else {
    return false;
  }
}

function checkWorkDays() {
  let num = (document.getElementById("workDays").value).trim();
  let days = parseInt(num);
  if (!isNaN(days) && days >= 1 && days <= 6) {
    return true;
  } else {
    return false;
  }
}

function validateForm() {
  let nid = document.getElementById("nid").value.trim();
  let fname = document.getElementById("fname").value.trim();
  let lname = document.getElementById("lname").value.trim();
  let workDays = document.getElementById("workDays").value.trim();
  let gender = document.querySelector('input[name="genderRad"]:checked');

  if (!nid || !fname || !lname || !workDays || !gender) {
    alert("Please fill in all fields!");
    return false;
  }
  if (!checkNID()) {
    alert("National ID must be 13 digits and numeric only!");
    document.getElementById("nid").focus();
    return false;
  }

  if (!checkWorkDays()) {
    alert("Working days must be between 1 and 6!");
    document.getElementById("workDays").focus();
    return false;
  }
  let total = payRateCalculate();
  alert("Your weekly pay rate is " + total + " THB");
  
  return false;
}