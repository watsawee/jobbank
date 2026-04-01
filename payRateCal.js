function payRateCalculate() {
  let workDays = parseInt((document.getElementById("workDays").value).trim());
  let selectObj = document.getElementById("year");
  let yearOfStudy = parseInt(selectObj.options[selectObj.selectedIndex].value);

  let ratePerDay = 0;
  if (yearOfStudy === 1) ratePerDay = 55;
  else if (yearOfStudy === 2) ratePerDay = 65;
  else if (yearOfStudy === 3) ratePerDay = 75;
  else if (yearOfStudy === 4) ratePerDay = 85;

  return ratePerDay * workDays;
}


