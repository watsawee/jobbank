function payRateCalculate() {
  
  let workDays = (document.getElementById("workDays").value).trim();
  let selectObj = document.getElementById("year");
  let yearOfStudy = parseInt(selectObj.options[selectObj.selectedIndex].value);
  
  let hourlyRate;
  
  switch(yearOfStudy) {
    case 1:
      hourlyRate = 55;
      break;
    case 2:
      hourlyRate = 65; 
      break;
    case 3:
      hourlyRate = 75; 
      break;
    case 4:
      hourlyRate = 85; 
      break;
    default:
      hourlyRate = 0;  
  }

 
  let weeklyPayRate = hourlyRate * workDays * 8 + " In case work 8 hour/day"; 
  
  return weeklyPayRate;
}
