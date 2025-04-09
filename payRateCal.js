function payRateCalculate() {
  let workDays = parseInt(document.getElementById("workDays").value.trim());
  let selectObj = document.getElementById("year");
  let yearOfStudy = parseInt(selectObj.options[selectObj.selectedIndex].value);

  let ratePerHour = 0;
  switch (yearOfStudy) {
    case 1: ratePerHour = 55; break;
    case 2: ratePerHour = 65; break;
    case 3: ratePerHour = 75; break;
    default: ratePerHour = 85;
  }

  let hoursPerDay = 4;
  return workDays * ratePerHour * hoursPerDay;
}