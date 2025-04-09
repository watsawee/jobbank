function payRateCalculate() {
  let workDays = parseInt(document.getElementById("workDays").value.trim());
  let selectObj = document.getElementById("year");
  let yearOfStudy = parseInt(selectObj.options[selectObj.selectedIndex].value);

  if (isNaN(workDays) || workDays < 1 || workDays > 6) {
    alert("Please enter a valid number of workdays (1-6).");
    return;
  }

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

  // Assuming 6 working hours per day
  let weeklyPay = workDays * 6 * hourlyRate;
  return weeklyPay;
}