function payRateCalculate() {
  let workDays = parseInt((document.getElementById("workDays").value).trim());
  let selectObj = document.getElementById("year");
  let yearOfStudy = parseInt(selectObj.options[selectObj.selectedIndex].value);

  let hourlyRate = 0;

  switch (yearOfStudy) {
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
      return null; 
  }

  const hoursPerDay = 8;
  const totalPay = hourlyRate * hoursPerDay * workDays;

  return totalPay;
}
