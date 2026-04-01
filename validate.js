function checkNID() {
let nid = document.getElementById("nid").value.trim();
return (!isNaN(nid) && nid.length === 13);
}
 
function checkWorkDays() {
let num = document.getElementById("workDays").value.trim();
if (isNaN(num)) return false;
num = parseInt(num);
return (num >= 1 && num <= 6);
}
 
function checkGender(){
let genders = document.getElementsByName("genderRad");
for(let i = 0; i < genders.length; i++){
  if(genders[i].checked){
   return true;
  }
}
return false;
}
 
function validateForm(){
 
let nid = document.getElementById("nid").value.trim();
let fname = document.getElementById("fname").value.trim();
let lname = document.getElementById("lname").value.trim();
let year = document.getElementById("year").value;
let school = document.getElementById("school").value;
let days = document.getElementById("workDays").value.trim();
 
if(!nid || !fname || !lname || !year || !school || !days){
  alert("Please fill all fields!");
  return false;
}
 
if(!checkGender()){
  alert("Please select gender!");
  return false;
}
 
if(!checkNID()){
  alert("Invalid value for National ID!");
  document.getElementById("nid").focus();
  return false;
}
 
if(!checkWorkDays()){
  alert("Invalid value for days of work!");
  document.getElementById("workDays").focus();
  return false;
}
 
let total = payRateCalculate();
alert("Your weekly pay is " + total + " THB");
 
return false;
}