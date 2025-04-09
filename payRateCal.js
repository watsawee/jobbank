function payRateCalculate() {
  let workDays = (document.getElementById("workDays").value).trim();
  if (isNaN(workDays) || workDays < 1 || workDays > 6) {
    alert("Please enter a valid number of work days between 1 and 6.");
    return 0; 
  }
  
  let selectObj = document.getElementById("year");
  let yearOfStudy = parseInt(selectObj.options[selectObj.selectedIndex].value);

  let dailyRate = 0;
  
  switch (yearOfStudy) {
    case 1:
      dailyRate = 55; 
      break;
    case 2:
      dailyRate = 65;
      break;
    case 3:
      dailyRate = 75;
      break;
    case 4:
      dailyRate = 85; 
      break;
    default:
      alert("Please select a valid year of study.");
      return 0;
  }

  const totalPay = dailyRate * workDays;

  return totalPay;
}
