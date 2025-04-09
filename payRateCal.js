function payRateCalculate() {
  let workDays = (document.getElementById("workDays").value).trim();
  
  let selectObj = document.getElementById("year");
  let yearOfStudy = parseInt(selectObj.options[selectObj.selectedIndex].value);
  
  let payrate = 0;

  if (yearOfStudy == 1) {
    payrate = workDays * 55;
  } else if (yearOfStudy == 2) {
    payrate = workDays * 65;
  } else if (yearOfStudy == 3) {
    payrate = workDays * 75;
  } else if (yearOfStudy == 4) {
    payrate = workDays * 85;
  }
  
  return payrate;
}


