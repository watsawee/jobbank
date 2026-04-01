function payRateCalculate() {
  let workDays = parseInt(document.getElementById("workDays").value.trim());
  let selectObj = document.getElementById("year");
  let yearValue = selectObj.options[selectObj.selectedIndex].value;
  
  let hourlyRate = 0;

  if (yearValue === "1") hourlyRate = 55;
  else if (yearValue === "2") hourlyRate = 65;
  else if (yearValue === "3") hourlyRate = 75;
  else if (yearValue === "4") hourlyRate = 85;


  let weeklyPay = hourlyRate * workDays;
  
  return weeklyPay;
}