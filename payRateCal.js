function payRateCalculate() {
  let workDays = (document.getElementById("workDays").value).trim();
  let selectObj = document.getElementById("year");
  let yearOfStudy = parseInt(selectObj.options[selectObj.selectedIndex].value);
  let perRate = 0;

  if(yearOfStudy == 0){
    perRate = 55;
  }
  if(yearOfStudy == 0){
    perRate = 65;
  }
  if(yearOfStudy == 0){
    perRate = 75;
  }
  if(yearOfStudy == 0){
    perRate = 85;
  }

  return workDays * perRate;
  
  return 0;
}


