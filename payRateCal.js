function payRateCalculate() {
  let workDays = parseInt(document.getElementById("workDays").value);
  let selectObj = document.getElementById("year");
  let yearOfStudy = parseInt(selectObj.options[selectObj.selectedIndex].value);

  const hoursPerDay = 12; 
 
  let hourlyRate;
 
  if (yearOfStudy === 1) {
    hourlyRate = 55;
  } else if (yearOfStudy === 2) {
    hourlyRate = 65;
  } else if (yearOfStudy === 3) {
    hourlyRate = 75;
  } else if (yearOfStudy === 4) {
    hourlyRate = 85;
  }
 
  let weeklyPayRate = hourlyRate * workDays * hoursPerDay;
 
  alert("Your weekly pay rate is " + weeklyPayRate + " THB");
 
  return weeklyPayRate;
  }


