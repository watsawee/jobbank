function payRateCalculate() {
  let workDays = parseInt(document.getElementById("workDays").value.trim());
  let selectObj = document.getElementById("year");
  let yearOfStudy = parseInt(selectObj.options[selectObj.selectedIndex].value);

  let ratePerHour = 0;

  switch (yearOfStudy) {
      case 1:
          ratePerHour = 55;
          break;
      case 2:
          ratePerHour = 65;
          break;
      case 3:
          ratePerHour = 75;
          break;
      case 4:
          ratePerHour = 85;
          break;
      default:
          ratePerHour = 0;
  }

  let totalPay = ratePerHour * 6 * workDays; 
  return totalPay;
}
