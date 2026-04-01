function payRateCalculate() {
  let workDays = parseInt(document.getElementById("workDays").value.trim());
  let selectObj = document.getElementById("year");
  let yearOfStudy = parseInt(selectObj.options[selectObj.selectedIndex].value);
  
  let rate = 0;
  if (yearOfStudy === 1) rate = 55;
  else if (yearOfStudy === 2) rate = 65;
  else if (yearOfStudy === 3) rate = 75;
  else if (yearOfStudy === 4) rate = 85;

  // Assuming an 8-hour workday for the calculation
  return workDays * rate * 8;
}


