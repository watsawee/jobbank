function payRateCalculate() {
  let workDays = (document.getElementById("workDays").value).trim();
  let selectObj = document.getElementById("year");
  let yearOfStudy = parseInt(selectObj.options[selectObj.selectedIndex].value);
  //alert("yearOfStudy = "+yearOfStudy);

  let workDaysNum = parseInt(workDays);

  let result = workDaysNum * yearOfStudy;
  
  return result;
}


