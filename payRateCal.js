function payRateCalculate() {
  let workDays = parseFloat((document.getElementById("workDays").value).trim());
  let selectObj = document.getElementById("year");
  let yearOfStudy = parseInt(selectObj.options[selectObj.selectedIndex].value);

  let hourlyRate = 0;
  switch(yearOfStudy) {
    case 1: hourlyRate = 55; break;  // 55 THB/hour
    case 2: hourlyRate = 65; break;  // 65 THB/hour
    case 3: hourlyRate = 75; break;  // 75 THB/hour
    case 4: hourlyRate = 85; break;  // 85 THB/hour
    default: hourlyRate = 0;
  }
  
  const hoursPerDay = 8;
  
  let weeklyPayRate = hourlyRate * hoursPerDay * workDays;
  
  return weeklyPayRate;
}