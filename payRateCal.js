function payRateCalculate() {
  let workDays = (document.getElementById("workDays").value).trim();
  let selectObj = document.getElementById("year");
  let yearOfStudy = parseInt(selectObj.options[selectObj.selectedIndex].value);
  
  switch (yearOfStudy) {
    case 1: return workDays * 55;
    case 2: return workDays * 65;
    case 3: return workDays * 75;
    case 4: return workDays * 85;
    default: return 0;
  }
  
  return 0;
}


