function payRateCalculate() {
  let workDays = (document.getElementById("workDays").value).trim();
  let selectObj = document.getElementById("year");
  let yearOfStudy = parseInt(selectObj.options[selectObj.selectedIndex].value);
  
  let ratePerHour;
  if(yearOfStudy === 1){
    ratePerHour = 55;
  }else if(yearOfStudy === 2){
    ratePerHour = 65;
  }else if(yearOfStudy === 3){
    ratePerHour = 75;
  }else if(yearOfStudy >= 4){
    ratePerHour = 85
  }
  
  let total = ratePerHour * 8 * workDays;
  return total;
}


