function payRateCalculate() {
  let workDays = parseInt(document.getElementById("workDays").value.trim());
  let selectObj = document.getElementById("year");
  let yearOfStudy = parseInt(selectObj.options[selectObj.selectedIndex].value);

  if (workDays < 1 || workDays > 6) {
    alert("Invalid number of work days. Please enter a number between 1 and 6.");
    return 0;
  }
  let payPerHour;
  switch (yearOfStudy) {
    case 1:
      payPerHour = 55;
      break;
    case 2:
      payPerHour = 65;
      break;
    case 3:
      payPerHour = 75;
      break;
    case 4:
    default:
      payPerHour = 85;
      break;
  }
  let weeklyPay = workDays * 8 * payPerHour;
  return weeklyPay;
}



