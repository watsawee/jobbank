function payRateCalculate() {
  let workDays = (document.getElementById("workDays").value).trim();
  let selectObj = document.getElementById("year");
  let yearOfStudy = parseInt(selectObj.options[selectObj.selectedIndex].value);
  //alert("yearOfStudy = "+yearOfStudy);
  
  let payRate;

  if (yearOfStudy === 1) {
    payRate = 55;
  } 
  else if (yearOfStudy === 2) {
    payRate = 65;
  } 
  else if (yearOfStudy === 3) {
    payRate = 75;
  } 
  else { // 4th year or higher
    payRate = 85;
  }

  return payRate * workDays;
}


