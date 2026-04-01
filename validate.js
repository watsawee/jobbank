function checkNID() {
    let nid = (document.getElementById("nid").value).trim();
    if(isNaN(nid) || nid.length !== 13){
      return false;
    } else {
      return true;
    }
  }
 
  function checkWorkDays() {
    let num = (document.getElementById("workDays").value).trim();
    let days = parseInt(num);
    if (isNaN(days) || days < 1 || days > 6) {
      return false;
    } else {
      return true;
    }
  }
 
  function validateForm(){
    let fname = document.getElementById("fname").value.trim();
    let lname = document.getElementById("lname").value.trim();
    if(fname === "" || lname === "") {
      alert("Please fill in both First Name and Last Name.");
      return false;
    }
    let gender = document.querySelector('input[name="genderRad"]:checked');
    if(!gender) {
      alert("Please select your Gender.");
      return false;
    }
 
    if(!checkNID()){
      alert("National ID must be exactly 13 digits and numeric!");
      document.getElementById("nid").focus();
      return false;
    }
 
    if(!checkWorkDays()){
      alert("Invalid value for days of work! (Must be 1-6 days)");
      document.getElementById("workDays").focus();
      return false;
    }
 
    let total = payRateCalculate();
    alert("Your weekly pay rate is " + total + " THB");
    return false;
  }
 