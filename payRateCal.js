function payRateCalculate() {
  let workDays = parseInt(document.getElementById("workDays").value.trim());
  let yearOfStudy = parseInt(document.getElementById("year").value);

  let payRate = 0;

  if (yearOfStudy === 1) {
    payRate = 55;
  } else if (yearOfStudy === 2) {
    payRate = 65;
  } else if (yearOfStudy === 3) {
    payRate = 75;
  } else if (yearOfStudy === 4) {
    payRate = 85;
  }

  return payRate * workDays;
}