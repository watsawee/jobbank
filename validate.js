function validateForm() {
  let nid = document.getElementById("nid").value.trim();
  let fname = document.getElementById("fname").value.trim();
  let lname = document.getElementById("lname").value.trim();
  let school = document.getElementById("school").value;
  let year = document.getElementById("year").value;
  let workDays = document.getElementById("workDays").value.trim();

  let genderMale = document.getElementById("gender1");
  let genderFemale = document.getElementById("gender2");
  let genderOther = document.getElementById("gender3");

  if (nid === "") {
    alert("Please fill in National ID!");
    document.getElementById("nid").focus();
    return false;
  }
    if (!/^\d{13}$/.test(nid)) {
    alert("National ID must be exactly 13 digits and numbers only!");
    document.getElementById("nid").focus();
    return false;
  }

  if (fname === "") {
    alert("Please fill in First Name!");
    document.getElementById("fname").focus();
    return false;
  }

  if (lname === "") {
    alert("Please fill in Last Name!");
    document.getElementById("lname").focus();
    return false;
  }

  if (!genderMale.checked && !genderFemale.checked && !genderOther.checked) {
    alert("Please select Gender!");
    return false;
  }

  if (school === "") {
    alert("Please select School!");
    document.getElementById("school").focus();
    return false;
  }

  if (year === "") {
    alert("Please select Year of Study!");
    document.getElementById("year").focus();
    return false;
  }

  if (workDays === "") {
    alert("Please fill in How many days a week can you work?!");
    document.getElementById("workDays").focus();
    return false;
  }
    if (workDays === "") {
    alert("Please fill in How many days a week can you work?!");
    document.getElementById("workDays").focus();
    return false;
  }
  if (!/^\d+$/.test(workDays) || parseInt(workDays) < 1 || parseInt(workDays) > 6) {
    alert("Work days must be between 1 and 6!");
    document.getElementById("workDays").focus();
    return false;
  }

  return false;
}