function payRateCalculate() {
  let workDaysInput = (document.getElementById("workDays").value).trim();
  let workDays = Number(workDaysInput);
  let selectObj = document.getElementById("year");
  let yearOfStudy = parseInt(selectObj.options[selectObj.selectedIndex].value);

  let hourlyRate;
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
    default:
      hourlyRate = 85;
      break;
  }

  let hoursPerDay = 1;
  let weeklyPay = workDays * hoursPerDay * hourlyRate;
  //alert("yearOfStudy = "+yearOfStudy);
  
  return weeklyPay;
}


