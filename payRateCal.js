function payRateCalculate() {
  let workDays = parseFloat((document.getElementById("workDays").value).trim());
  let selectObj = document.getElementById("year");
  let yearOfStudy = parseInt(selectObj.options[selectObj.selectedIndex].value);
 
  let hourlyRate;
  if (yearOfStudy === 1) {
    hourlyRate = 55;
  } else if (yearOfStudy === 2) {
    hourlyRate = 65;
  } else if (yearOfStudy === 3){
    hourlyRate = 75;
  } else if (yearOfStudy === 4) {
    hourlyRate = 85;
  }
 
  let weeklyPayRate = hourlyRate * workDays;
 
  alert("Your weekly pay rate is " + weeklyPayRate + " THB");
 
  return false;
  }

